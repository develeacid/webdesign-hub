#!/usr/bin/env node

/**
 * Capture screenshots of all pages for the hub preview cards.
 * Usage: npm run capture
 * Requires: npx serve running on port 3000
 */

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const PAGES = [
  { slug: 'saas-landing', name: 'SaaS Landing' },
  { slug: 'portfolio-creativo', name: 'Portfolio Creativo' },
  { slug: 'agencia-digital', name: 'Agencia Digital' },
  { slug: 'ecommerce-store', name: 'E-commerce Store' },
  { slug: 'blog-magazine', name: 'Blog Magazine' },
  { slug: 'restaurante', name: 'Restaurante' },
  { slug: 'fitness-wellness', name: 'Fitness Wellness' },
  { slug: 'startup-coming-soon', name: 'Startup Coming Soon' },
  { slug: 'evento-conferencia', name: 'Evento Conferencia' },
];

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';
const OUTPUT_DIR = path.join(__dirname, '..', 'assets', 'img');
const VIEWPORT = { width: 1280, height: 720 };

async function capture() {
  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  console.log(`Capturing ${PAGES.length} pages from ${BASE_URL}...\n`);

  for (const page of PAGES) {
    const url = `${BASE_URL}/${page.slug}.html`;
    const outputPath = path.join(OUTPUT_DIR, `${page.slug}.jpg`);

    try {
      const tab = await browser.newPage();
      await tab.setViewport(VIEWPORT);
      await tab.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });

      // Wait for animations to settle
      await new Promise(r => setTimeout(r, 2000));

      await tab.screenshot({
        path: outputPath,
        type: 'jpeg',
        quality: 85,
      });

      await tab.close();
      console.log(`  ✓ ${page.name} → ${page.slug}.jpg`);
    } catch (err) {
      console.error(`  ✗ ${page.name}: ${err.message}`);
    }
  }

  await browser.close();
  console.log('\nDone! Screenshots saved to assets/img/');
}

capture().catch(console.error);
