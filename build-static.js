#!/usr/bin/env node
/**
 * build-static.js
 * Assembles the deployable static output in ./dist for Cloudflare Pages.
 *
 * What it copies into dist/:
 *   index.html                  → dist/index.html
 *   _headers                    → dist/_headers
 *   _redirects                  → dist/_redirects
 *   src/scripts/                → dist/src/scripts/   (/src/scripts/main.js)
 *   src/styles/                 → dist/src/styles/    (/src/styles/main.css etc.)
 *   assets/                     → dist/assets/        (/assets/images/…)
 *   src/assets/   (merged)      → dist/assets/        (service images also at /assets/)
 *   public/assets/ (merged)     → dist/assets/        (any public assets)
 *   public/favicon.ico          → dist/favicon.ico
 *
 * NOTE: /functions/ stays at the PROJECT ROOT — Wrangler reads it from there.
 *       Do NOT copy functions/ into dist.
 */

import { cpSync, rmSync, mkdirSync, existsSync, copyFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = __dirname;
const dist = join(root, 'dist');

// ── 1. Clean dist ─────────────────────────────────────────────────────────────
console.log('🗑  Cleaning dist/…');
if (existsSync(dist)) rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });

// ── Helpers ───────────────────────────────────────────────────────────────────
function copy(src, dest, label) {
  const srcPath  = join(root, src);
  const destPath = join(dist, dest);
  if (!existsSync(srcPath)) { console.warn(`⚠  Skipped (not found): ${src}`); return; }
  mkdirSync(join(dist, dest, '..'), { recursive: true });
  cpSync(srcPath, destPath, { recursive: true });
  console.log(`✓  ${label ?? src}  →  dist/${dest}`);
}

function copyFile(src, dest) {
  const srcPath  = join(root, src);
  const destPath = join(dist, dest);
  if (!existsSync(srcPath)) { console.warn(`⚠  Skipped (not found): ${src}`); return; }
  copyFileSync(srcPath, destPath);
  console.log(`✓  ${src}  →  dist/${dest}`);
}

function mergeDir(src, destRelative, label) {
  const srcPath = join(root, src);
  if (!existsSync(srcPath)) { console.warn(`⚠  Skipped (not found): ${src}`); return; }
  cpSync(srcPath, join(dist, destRelative), { recursive: true });
  console.log(`✓  ${label ?? src}  →  dist/${destRelative}  (merged)`);
}

// ── 2. Root files ─────────────────────────────────────────────────────────────
copyFile('index.html', 'index.html');
copyFile('_headers',   '_headers');
copyFile('_redirects', '_redirects');

// ── 3. CSS + JS only (NOT src/assets — those go into dist/assets/ below) ──────
copy('src/scripts', 'src/scripts', 'src/scripts/');
copy('src/styles',  'src/styles',  'src/styles/');

// ── 4. Primary image assets (/assets/images/…) ────────────────────────────────
copy('assets', 'assets', 'assets/');

// ── 5. Merge src/assets/ into dist/assets/ ────────────────────────────────────
// Some service images live under src/assets/images/ and are referenced as /assets/images/…
mergeDir('src/assets', 'assets', 'src/assets/');

// ── 6. Merge public/assets/ + favicon ────────────────────────────────────────
mergeDir('public/assets', 'assets', 'public/assets/');
const favicon = join(root, 'public', 'favicon.ico');
if (existsSync(favicon)) {
  copyFileSync(favicon, join(dist, 'favicon.ico'));
  console.log('✓  public/favicon.ico  →  dist/favicon.ico');
}

// ── 7. Images/ folder ────────────────────────────────────────────────────────
copy('Images', 'Images', 'Images/');

console.log('\n✅  Static build complete → dist/');
console.log('   Run: npm run deploy\n');
