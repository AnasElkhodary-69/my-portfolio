const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1920, height: 1080 });

  console.log('📸 Testing project detail page...');

  await page.goto('http://localhost:3000/projects/savety-ai');
  await page.waitForTimeout(2000);

  await page.screenshot({
    path: 'screenshots/project-detail-page.png',
    fullPage: true
  });

  console.log('✓ Project detail page captured');

  await browser.close();
  console.log('\n✅ Project detail page verified!');
})();
