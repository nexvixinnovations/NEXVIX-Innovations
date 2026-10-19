#!/usr/bin/env node
/**
 * scripts/build-static.mjs
 * Dependency-free Node.js script to assemble the deployable static site in ./dist
 * for Cloudflare Pages.
 *
 * Requirements:
 * - Deletes and recreates dist/
 * - Copies:
 *     - index.html
 *     - src/styles/ (main.css, variables.css)
 *     - src/scripts/ (main.js)
 *     - public/ (assets, favicon.ico, _headers, _redirects)
 *     - assets/ and src/assets/ merged into dist/assets/
 *     - Images/ into dist/Images/
 * - Does NOT touch or copy functions/ (functions stays at the project root)
 * - Verifies every asset path referenced in index.html resolves inside dist/
 */

import {
  rmSync,
  mkdirSync,
  existsSync,
  copyFileSync,
  cpSync,
  readFileSync,
  statSync,
} from 'fs';
import { join, dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = resolve(__dirname, '..');
const distDir = join(projectRoot, 'dist');

console.log('🚀 Starting static site build for Cloudflare Pages...\n');

// 1. Clean and recreate dist/
if (existsSync(distDir)) {
  console.log('🧹 Removing existing dist/ directory...');
  rmSync(distDir, { recursive: true, force: true });
}
mkdirSync(distDir, { recursive: true });
console.log('📁 Created fresh dist/ directory.');

// Helper to copy a single file ensuring parent directory exists
function copyFileSafe(src, dest) {
  const srcPath = join(projectRoot, src);
  const destPath = join(distDir, dest);
  if (!existsSync(srcPath)) {
    console.warn(`⚠️  Source file not found (skipped): ${src}`);
    return false;
  }
  mkdirSync(dirname(destPath), { recursive: true });
  copyFileSync(srcPath, destPath);
  console.log(`✓ Copied file: ${src} -> dist/${dest}`);
  return true;
}

// Helper to recursively copy or merge directories
function copyDirSafe(src, dest) {
  const srcPath = join(projectRoot, src);
  const destPath = join(distDir, dest);
  if (!existsSync(srcPath)) {
    console.warn(`⚠️  Source directory not found (skipped): ${src}`);
    return false;
  }
  mkdirSync(destPath, { recursive: true });
  cpSync(srcPath, destPath, { recursive: true });
  console.log(`✓ Copied directory: ${src}/ -> dist/${dest}/`);
  return true;
}

// 2. Copy index.html
copyFileSafe('index.html', 'index.html');

// 3. Copy src/ runtime assets needed by index.html (styles & scripts)
copyDirSafe('src/styles', 'src/styles');
copyDirSafe('src/scripts', 'src/scripts');

// 4. Copy primary assets/ and Images/ directories
copyDirSafe('assets', 'assets');
copyDirSafe('Images', 'Images');

// 5. Merge src/assets/ into dist/assets/ if present
if (existsSync(join(projectRoot, 'src/assets'))) {
  copyDirSafe('src/assets', 'assets');
}

// 6. Copy public/ directory contents into dist/
if (existsSync(join(projectRoot, 'public'))) {
  console.log('📦 Merging public/ directory into dist/ ...');
  // Copy public/assets into dist/assets
  if (existsSync(join(projectRoot, 'public/assets'))) {
    copyDirSafe('public/assets', 'assets');
  }
  // Copy favicon
  if (existsSync(join(projectRoot, 'public/favicon.ico'))) {
    copyFileSafe('public/favicon.ico', 'favicon.ico');
  }
  // Copy headers and redirects from public if present
  if (existsSync(join(projectRoot, 'public/_headers'))) {
    copyFileSafe('public/_headers', '_headers');
  }
  if (existsSync(join(projectRoot, 'public/_redirects'))) {
    copyFileSafe('public/_redirects', '_redirects');
  }
}

// Fallback / priority for root _headers and _redirects if not in public/
if (existsSync(join(projectRoot, '_headers')) && !existsSync(join(distDir, '_headers'))) {
  copyFileSafe('_headers', '_headers');
}
if (existsSync(join(projectRoot, '_redirects'))) {
  // Ensure the latest redirects from root (containing crm & automation 301s) are placed in dist
  copyFileSafe('_redirects', '_redirects');
}

// 7. Verify functions/ is NOT in dist
if (existsSync(join(distDir, 'functions'))) {
  console.error('❌ ERROR: functions/ was found inside dist/! Removing it immediately.');
  rmSync(join(distDir, 'functions'), { recursive: true, force: true });
} else {
  console.log('🔒 Confirmed: functions/ remains isolated at project root and is NOT in dist.');
}

// 8. Verify all local paths referenced in index.html resolve inside dist/
console.log('\n🔍 Verifying all asset references in dist/index.html...');
const indexHtmlContent = readFileSync(join(distDir, 'index.html'), 'utf-8');

// Match src="..." and href="..." and srcset="..." paths starting with /
const assetRegex = /(?:src|href|srcset)=["']([^"']+)["']/g;
const missingAssets = new Set();
const checkedAssets = new Set();

let match;
while ((match = assetRegex.exec(indexHtmlContent)) !== null) {
  const fullVal = match[1].trim();

  // Handle srcset which may contain multiple comma-separated items like "path1 1x, path2 2x"
  const candidates = fullVal.split(',').map(s => s.trim().split(/\s+/)[0]);

  for (const rawUrl of candidates) {
    // Only check local absolute paths starting with '/'
    if (!rawUrl.startsWith('/') || rawUrl.startsWith('//')) {
      continue;
    }
    // Ignore hash-only, mailto, tel, or external protocols
    if (rawUrl.startsWith('/#') || rawUrl.includes(':')) {
      continue;
    }

    // Clean query strings or hashes
    const cleanPath = rawUrl.split('?')[0].split('#')[0];
    if (!cleanPath || cleanPath === '/') continue;

    checkedAssets.add(cleanPath);
    // Relative path inside dist
    const diskPath = join(distDir, cleanPath.slice(1));
    if (!existsSync(diskPath)) {
      missingAssets.add(cleanPath);
    }
  }
}

console.log(`ℹ️  Checked ${checkedAssets.size} unique local assets referenced by index.html.`);

if (missingAssets.size > 0) {
  console.error('❌ Verification failed! The following referenced assets are missing in dist/:');
  missingAssets.forEach(p => console.error(`   - ${p}`));
  process.exit(1);
} else {
  console.log('✅ All local assets referenced in index.html successfully resolved in dist/!\n');
}

console.log('🎉 Static build completed successfully in ./dist!\n');
