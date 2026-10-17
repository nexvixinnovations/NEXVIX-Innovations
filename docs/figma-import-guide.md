# Figma Import Guide: NEXVIX Innovations

This website is designed and structured specifically to allow 1-click import into Figma as a fully editable design file with Auto-Layout, clean component layer hierarchies, and design tokens.

---

## 1. Import via `html.to.design` (Recommended)

`html.to.design` is the industry standard Figma plugin that converts live web pages and local HTML into editable Figma auto-layout frames, retaining exact typography, vectors, spacing, and styles.

### Steps:
1. **Launch the Local Dev Server**:
   ```bash
   npm run dev
   ```
   (Typically serves at `http://localhost:5173/`).
2. **Open Figma**:
   - Create a new design file or open your project file in Figma.
   - Go to **Plugins** -> Search for **html.to.design** (or run `html.to.design` from Community).
3. **Import Local URL or Raw HTML**:
   - **Option A (Direct URL)**: Enter your running local URL (e.g. `http://localhost:5173`) into the plugin input and select **Desktop (1440px)** and/or **Mobile (390px)**.
   - **Option B (Chrome Extension)**: If using the `html.to.design` Chrome extension, open the page in your browser, click the extension icon, and click **Import into Figma**.
4. **Auto-Converted Features**:
   - **Auto-Layout**: Every flexbox and CSS grid row converts automatically into Figma Auto-Layout frames.
   - **Typography**: Text nodes use Google Fonts **Space Grotesk** and **Inter**. Make sure these fonts are installed or activated in Figma.
   - **Layer Names**: All frames and elements are named according to their `data-figma-component` and `data-figma-layer` attributes (e.g. `Hero-Section`, `Service-Card-01`, `Navbar`, etc.).

---

## 2. Design Tokens Sync (Tokens Studio for Figma)

If you use the **Tokens Studio for Figma** plugin (formerly Figma Tokens):
1. Open the **Tokens Studio for Figma** plugin.
2. Go to **Settings** -> **Load from Local File** -> select `/docs/figma-tokens.json`.
3. All brand colors (`#0A0A0F`, `#1F3BFF`, `#6B7FFF`, `#F5F6FA`), typography scales, spacing tokens, and border radii will instantly populate as Figma variables and styles.

---

## 3. Component Architecture Reference

| Section ID | Component Attribute | Description |
| :--- | :--- | :--- |
| `#navbar` | `data-figma-component="Navbar"` | Sticky white header with logo, navigation links, and quote button |
| `#hero` | `data-figma-component="Hero-Section"` | Near-black hero with two-tone headline, live status chip, and AI visual |
| `#marquee` | `data-figma-component="Marquee-Ticker"` | High-speed looping service ticker |
| `#about` | `data-figma-component="About-Section"` | Light about section with 4 animated counter cards and partnership imagery |
| `#services` | `data-figma-component="Services-Section"` | 6 numbered service cards with 16:10 images and hover glow |
| `#quality` | `data-figma-component="Quality-Section"` | Alternating dark engineering benchmark cards with thin dividers |
| `#why-nexvix` | `data-figma-component="Why-Nexvix-Section"` | Dark checklist with custom electric-blue check badges |
| `#process` | `data-figma-component="Process-Section"` | 4-step execution framework |
| `#testimonials` | `data-figma-component="Testimonials-Section"`| Verified client testimonial cards with 5-star ratings |
| `#cta-banner` | `data-figma-component="CTA-Banner-Section"` | Dark glowing CTA card with dual buttons |
| `#contact` | `data-figma-component="Contact-Section"` | Direct communication cards + interactive form with validation |
| `#footer` | `data-figma-component="Footer-Section"` | 5-column brand, service links, company links, and legal row |
