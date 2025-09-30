const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 1000 });

  // Load the local HTML file
  const filePath = 'file://' + path.resolve(__dirname, 'index.html');
  await page.goto(filePath);

  // Scroll to about section
  await page.evaluate(() => {
    document.querySelector('#about').scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 500));

  // Take screenshot of about section
  await page.screenshot({ path: 'screenshot-about-spacing.png', fullPage: false });
  console.log('Captured: screenshot-about-spacing.png');

  await browser.close();
})();