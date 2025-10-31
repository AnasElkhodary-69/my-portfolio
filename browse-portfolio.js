const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  console.log('🚀 Starting portfolio website browsing session...\n');

  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  const page = await context.newPage();

  const screenshotsDir = path.join(__dirname, 'screenshots', 'browse-session');
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  let screenshotCounter = 1;
  const takeScreenshot = async (name) => {
    const filename = `${screenshotCounter.toString().padStart(2, '0')}-${name}.png`;
    await page.screenshot({ path: path.join(screenshotsDir, filename), fullPage: true });
    console.log(`📸 Screenshot saved: ${filename}`);
    screenshotCounter++;
  };

  try {
    // Step 1: Navigate to homepage
    console.log('1️⃣ Navigating to homepage...');
    await page.goto('http://localhost:3001', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await takeScreenshot('homepage-initial');

    // Check page title
    const title = await page.title();
    console.log(`   Page Title: ${title}`);

    // Check hero section
    console.log('\n2️⃣ Analyzing Hero Section...');
    const heroText = await page.locator('h1, h2').first().textContent().catch(() => 'Not found');
    console.log(`   Hero Text: ${heroText}`);

    // Get all visible text for analysis
    const pageContent = await page.evaluate(() => {
      const sections = [];
      document.querySelectorAll('section, div[class*="section"]').forEach((section, idx) => {
        const heading = section.querySelector('h1, h2, h3')?.textContent || 'No heading';
        sections.push(`Section ${idx + 1}: ${heading}`);
      });
      return sections;
    });
    console.log('   Page Sections Found:');
    pageContent.forEach(section => console.log(`   - ${section}`));

    // Step 2: Scroll through homepage
    console.log('\n3️⃣ Scrolling through homepage sections...');
    const scrollSteps = 4;
    for (let i = 1; i <= scrollSteps; i++) {
      await page.evaluate(({ step, total }) => {
        window.scrollTo({
          top: (document.documentElement.scrollHeight / total) * step,
          behavior: 'smooth'
        });
      }, { step: i, total: scrollSteps });
      await page.waitForTimeout(1500);
      await takeScreenshot(`homepage-scroll-${i}`);
      console.log(`   Scrolled to position ${i}/${scrollSteps}`);
    }

    // Scroll back to top
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
    await page.waitForTimeout(1000);

    // Step 3: Find and analyze project cards
    console.log('\n4️⃣ Looking for project cards...');
    const projectCards = await page.locator('a[href^="/projects/"], div[class*="project"], article[class*="project"]').all();
    console.log(`   Found ${projectCards.length} potential project cards`);

    // Get project information
    const projects = await page.evaluate(() => {
      const projectLinks = Array.from(document.querySelectorAll('a[href^="/projects/"]'));
      return projectLinks.map(link => ({
        title: link.querySelector('h3, h2, h1')?.textContent || 'No title',
        href: link.getAttribute('href'),
        description: link.querySelector('p')?.textContent?.substring(0, 100) || 'No description'
      }));
    });

    console.log('   Projects found:');
    projects.forEach((proj, idx) => {
      console.log(`   ${idx + 1}. ${proj.title}`);
      console.log(`      URL: ${proj.href}`);
      console.log(`      Description: ${proj.description}...`);
    });

    // Step 4: Click on first project
    if (projects.length > 0) {
      console.log(`\n5️⃣ Clicking on first project: "${projects[0].title}"...`);
      await page.click(`a[href="${projects[0].href}"]`);
      await page.waitForTimeout(2000);
      await takeScreenshot('project-1-detail');

      const projectTitle = await page.locator('h1').first().textContent().catch(() => 'Not found');
      console.log(`   Project Page Title: ${projectTitle}`);

      // Analyze project detail page
      const projectDetails = await page.evaluate(() => {
        const details = {
          title: document.querySelector('h1')?.textContent || 'No title',
          description: document.querySelector('p, div[class*="description"]')?.textContent?.substring(0, 200) || 'No description',
          technologies: Array.from(document.querySelectorAll('span[class*="tech"], div[class*="tech"]')).map(el => el.textContent),
          images: document.querySelectorAll('img').length,
          buttons: Array.from(document.querySelectorAll('button, a[class*="button"]')).map(btn => btn.textContent.trim())
        };
        return details;
      });

      console.log('   Project Details:');
      console.log(`   - Technologies: ${projectDetails.technologies.join(', ') || 'None found'}`);
      console.log(`   - Images: ${projectDetails.images}`);
      console.log(`   - Buttons: ${projectDetails.buttons.join(', ') || 'None found'}`);

      // Scroll through project page
      console.log('   Scrolling through project details...');
      await page.evaluate(() => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' }));
      await page.waitForTimeout(1500);
      await takeScreenshot('project-1-bottom');

      // Check navigation buttons
      console.log('\n6️⃣ Testing navigation...');
      const backButton = await page.locator('a[href="/"], button:has-text("Back"), a:has-text("Back")').first();
      if (backButton) {
        console.log('   Found back navigation button');
      }

      // Navigate to another project if available
      if (projects.length > 1) {
        await page.goto('http://localhost:3001', { waitUntil: 'networkidle' });
        await page.waitForTimeout(1000);

        console.log(`\n7️⃣ Navigating to second project: "${projects[1].title}"...`);
        await page.click(`a[href="${projects[1].href}"]`);
        await page.waitForTimeout(2000);
        await takeScreenshot('project-2-detail');

        const project2Title = await page.locator('h1').first().textContent().catch(() => 'Not found');
        console.log(`   Project Page Title: ${project2Title}`);

        // Scroll through second project
        await page.evaluate(() => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' }));
        await page.waitForTimeout(1500);
        await takeScreenshot('project-2-bottom');
      }

      // Test third project if available
      if (projects.length > 2) {
        await page.goto('http://localhost:3001', { waitUntil: 'networkidle' });
        await page.waitForTimeout(1000);

        console.log(`\n8️⃣ Navigating to third project: "${projects[2].title}"...`);
        await page.click(`a[href="${projects[2].href}"]`);
        await page.waitForTimeout(2000);
        await takeScreenshot('project-3-detail');

        await page.evaluate(() => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' }));
        await page.waitForTimeout(1500);
        await takeScreenshot('project-3-bottom');
      }
    }

    // Step 5: Check responsive design
    console.log('\n9️⃣ Testing responsive design...');
    await page.goto('http://localhost:3001', { waitUntil: 'networkidle' });

    // Mobile view
    await page.setViewportSize({ width: 375, height: 812 });
    await page.waitForTimeout(1000);
    await takeScreenshot('homepage-mobile');
    console.log('   Captured mobile view (375x812)');

    // Tablet view
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.waitForTimeout(1000);
    await takeScreenshot('homepage-tablet');
    console.log('   Captured tablet view (768x1024)');

    // Desktop view
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(1000);
    await takeScreenshot('homepage-desktop');
    console.log('   Captured desktop view (1920x1080)');

    // Step 6: Check for interactive elements
    console.log('\n🔟 Analyzing interactive elements...');
    const interactiveElements = await page.evaluate(() => {
      return {
        buttons: document.querySelectorAll('button').length,
        links: document.querySelectorAll('a').length,
        inputs: document.querySelectorAll('input, textarea').length,
        animations: Array.from(document.styleSheets).some(sheet => {
          try {
            return Array.from(sheet.cssRules).some(rule =>
              rule.cssText.includes('animation') || rule.cssText.includes('transition')
            );
          } catch (e) {
            return false;
          }
        })
      };
    });

    console.log(`   - Buttons: ${interactiveElements.buttons}`);
    console.log(`   - Links: ${interactiveElements.links}`);
    console.log(`   - Form inputs: ${interactiveElements.inputs}`);
    console.log(`   - Has animations/transitions: ${interactiveElements.animations ? 'Yes' : 'No'}`);

    // Step 7: Design analysis
    console.log('\n📊 Design Analysis...');
    const designAnalysis = await page.evaluate(() => {
      const computedStyle = window.getComputedStyle(document.body);
      const allElements = document.querySelectorAll('*');
      const colors = new Set();
      const fonts = new Set();

      allElements.forEach(el => {
        const style = window.getComputedStyle(el);
        if (style.color) colors.add(style.color);
        if (style.backgroundColor && style.backgroundColor !== 'rgba(0, 0, 0, 0)') {
          colors.add(style.backgroundColor);
        }
        if (style.fontFamily) fonts.add(style.fontFamily);
      });

      return {
        backgroundColor: computedStyle.backgroundColor,
        textColor: computedStyle.color,
        fontFamily: computedStyle.fontFamily,
        uniqueColors: colors.size,
        uniqueFonts: fonts.size,
        hasDarkMode: document.documentElement.classList.contains('dark') ||
                     document.body.classList.contains('dark')
      };
    });

    console.log(`   - Background: ${designAnalysis.backgroundColor}`);
    console.log(`   - Text Color: ${designAnalysis.textColor}`);
    console.log(`   - Font Family: ${designAnalysis.fontFamily}`);
    console.log(`   - Unique Colors Used: ${designAnalysis.uniqueColors}`);
    console.log(`   - Dark Mode: ${designAnalysis.hasDarkMode ? 'Detected' : 'Not detected'}`);

    console.log('\n✅ Browsing session complete!');
    console.log(`📁 All screenshots saved to: ${screenshotsDir}`);

  } catch (error) {
    console.error('❌ Error during browsing:', error.message);
    await takeScreenshot('error-state');
  } finally {
    await page.waitForTimeout(2000);
    await browser.close();
  }
})();
