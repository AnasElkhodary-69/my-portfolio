const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Set viewport size
  await page.setViewportSize({ width: 1920, height: 1080 });

  console.log('📸 Capturing SavetyAI website...');

  // Navigate to SavetyAI
  await page.goto('https://savety.ai/');
  await page.waitForTimeout(3000); // Wait for animations

  // Take full page screenshot
  await page.screenshot({
    path: 'screenshots/savety-ai-homepage.png',
    fullPage: true
  });

  console.log('✓ SavetyAI screenshot saved');

  // Capture hero section only
  await page.screenshot({
    path: 'screenshots/savety-ai-hero.png',
    clip: { x: 0, y: 0, width: 1920, height: 1080 }
  });

  console.log('✓ SavetyAI hero section saved');

  // Now capture your portfolio
  console.log('\n📸 Capturing your portfolio website...');

  await page.goto('http://localhost:3000');
  await page.waitForTimeout(2000);

  await page.screenshot({
    path: 'screenshots/portfolio-homepage.png',
    fullPage: true
  });

  console.log('✓ Portfolio screenshot saved');

  // Capture hero section
  await page.screenshot({
    path: 'screenshots/portfolio-hero.png',
    clip: { x: 0, y: 0, width: 1920, height: 1080 }
  });

  console.log('✓ Portfolio hero section saved');

  await browser.close();
  console.log('\n✅ Comparison screenshots captured successfully!');
  console.log('\nScreenshots saved:');
  console.log('  - savety-ai-homepage.png (full page)');
  console.log('  - savety-ai-hero.png (hero section)');
  console.log('  - portfolio-homepage.png (full page)');
  console.log('  - portfolio-hero.png (hero section)');
})();
