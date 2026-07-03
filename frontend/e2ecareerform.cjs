const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 1200 } });

  await page.goto('http://localhost:5173/career', { waitUntil: 'networkidle' });
  await page.fill('input[name="position"]', 'Optometrist');
  await page.fill('input[name="name"]', 'UI Test Applicant');
  await page.fill('input[name="email"]', 'ui-test@example.com');
  await page.fill('input[name="phone"]', '9123456780');
  await page.fill('input[name="location"]', 'Chintamani');
  await page.click('button:has-text("Submit")');
  await page.waitForTimeout(3000);

  const success = await page.locator('text=Thank you! Your application has been sent.').count();
  console.log('Success message shown:', success > 0);

  await browser.close();
})();
