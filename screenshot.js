const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Set viewport size
  await page.setViewportSize({ width: 1920, height: 1080 });

  // Navigate to the portfolio
  await page.goto('http://localhost:3000');

  // Wait for page to load
  await page.waitForTimeout(2000);

  // Take full page screenshot
  await page.screenshot({
    path: 'screenshots/homepage-desktop.png',
    fullPage: true
  });

  console.log('✓ Desktop screenshot saved');

  // Mobile viewport
  await page.setViewportSize({ width: 375, height: 812 });
  await page.screenshot({
    path: 'screenshots/homepage-mobile.png',
    fullPage: true
  });

  console.log('✓ Mobile screenshot saved');

  // Test project filtering
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.click('text=Web Application');
  await page.waitForTimeout(500);
  await page.screenshot({
    path: 'screenshots/projects-filtered.png'
  });

  console.log('✓ Projects filter screenshot saved');

  await browser.close();
  console.log('\n✅ All screenshots captured successfully!');
})();
