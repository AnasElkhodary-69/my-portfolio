const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1200, height: 800 });

  console.log('📸 Capturing project screenshots...\n');

  // 1. SavetyAI
  console.log('Capturing SavetyAI...');
  try {
    await page.goto('https://savety.ai/', { timeout: 30000 });
    await page.waitForTimeout(3000);
    await page.screenshot({
      path: 'public/images/savety-ai-preview.png',
      clip: { x: 0, y: 0, width: 1200, height: 800 }
    });
    console.log('✓ SavetyAI captured\n');
  } catch (e) {
    console.log('✗ SavetyAI failed:', e.message, '\n');
  }

  // 2. SalesBreach PRO
  console.log('Capturing SalesBreach PRO...');
  try {
    await page.goto('https://marketing.savety.online/', { timeout: 30000 });
    await page.waitForTimeout(3000);
    await page.screenshot({
      path: 'public/images/salesbreach-preview.png',
      clip: { x: 0, y: 0, width: 1200, height: 800 }
    });
    console.log('✓ SalesBreach PRO captured\n');
  } catch (e) {
    console.log('✗ SalesBreach PRO failed:', e.message, '\n');
  }

  // 3. For Sales Master - create placeholder (no public URL)
  console.log('Creating Sales Master placeholder...');
  await page.setContent(`
    <html>
      <body style="margin:0; padding:0; display:flex; align-items:center; justify-content:center; height:100vh; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); font-family: Arial;">
        <div style="text-align:center; color:white;">
          <h1 style="font-size:48px; margin-bottom:20px;">Sales Master</h1>
          <p style="font-size:24px; opacity:0.9;">Multi-Tenant SaaS Platform</p>
          <p style="font-size:18px; opacity:0.8; margin-top:40px;">🚀 Running 24/7 in Production</p>
        </div>
      </body>
    </html>
  `);
  await page.screenshot({
    path: 'public/images/sales-master-preview.png',
    clip: { x: 0, y: 0, width: 1200, height: 800 }
  });
  console.log('✓ Sales Master placeholder created\n');

  // 4. For SDS Automation - create placeholder (no public URL)
  console.log('Creating SDS Automation placeholder...');
  await page.setContent(`
    <html>
      <body style="margin:0; padding:0; display:flex; align-items:center; justify-content:center; height:100vh; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); font-family: Arial;">
        <div style="text-align:center; color:white;">
          <h1 style="font-size:48px; margin-bottom:20px;">SDS Automation</h1>
          <p style="font-size:24px; opacity:0.9;">AI-Powered Email Processing</p>
          <p style="font-size:18px; opacity:0.8; margin-top:40px;">🤖 24/7 Production System</p>
        </div>
      </body>
    </html>
  `);
  await page.screenshot({
    path: 'public/images/sds-automation-preview.png',
    clip: { x: 0, y: 0, width: 1200, height: 800 }
  });
  console.log('✓ SDS Automation placeholder created\n');

  // 5. For Oola - use the screenshot we already have
  console.log('Checking Oola screenshot...');
  const fs = require('fs');
  const oolaSource = 'C:\\Anas\'s PC\\Moaz\\Oola\\ikraa\\screenshots\\1.png';
  if (fs.existsSync(oolaSource)) {
    fs.copyFileSync(oolaSource, 'public/images/oola-preview.png');
    console.log('✓ Oola screenshot copied\n');
  } else {
    // Create placeholder
    await page.setContent(`
      <html>
        <body style="margin:0; padding:0; display:flex; align-items:center; justify-content:center; height:100vh; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); font-family: Arial;">
          <div style="text-align:center; color:white;">
            <h1 style="font-size:48px; margin-bottom:20px;">Oola</h1>
            <p style="font-size:24px; opacity:0.9;">Arabic Learning App</p>
            <p style="font-size:18px; opacity:0.8; margin-top:40px;">📱 In Development</p>
          </div>
        </body>
      </html>
    `);
    await page.screenshot({
      path: 'public/images/oola-preview.png',
      clip: { x: 0, y: 0, width: 1200, height: 800 }
    });
    console.log('✓ Oola placeholder created\n');
  }

  await browser.close();
  console.log('✅ All project screenshots ready!');
})();
