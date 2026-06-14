import { test, expect } from "@playwright/test";

test.describe("About Page Responsiveness & Interaction", () => {
  test.beforeEach(async ({ page }) => {
    // Navigate directly to the about page (should bypass splash screen on subpages)
    await page.goto("/about");
  });

  test("should not have horizontal layout overflows at 320px viewport", async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 568 });
    await page.waitForTimeout(1000); // Let layout settle

    const overflowActive = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });
    expect(overflowActive).toBe(false);
  });

  test("should toggle accordion tabs in AboutPillars section", async ({ page }) => {
    // Check for the heading of AboutPillars
    const title = page.locator('h2:has-text("A dental brand works better")');
    await expect(title).toBeVisible();

    // Check that we have buttons for our pillars
    const pillars = ["Clear explanations", "Comfort-first care", "Modern presentation"];
    for (const name of pillars) {
      const btn = page.locator(`button:has-text("${name}")`).first();
      await expect(btn).toBeVisible();
    }

    // Target the second pillar tab button and description
    const btn2 = page.locator('button:has-text("Comfort-first care")').first();
    const desc2 = page.locator('p:has-text("The whole visit should feel calmer")').first();
    
    // Click on Pillar 2 to expand it
    await btn2.click();
    await page.waitForTimeout(500); // Wait for open transition
    
    // Verify text body is now visible
    await expect(desc2).toBeVisible();
  });

  test("should display AboutDoctor section properly", async ({ page }) => {
    // Check doctor name is present
    const docName = page.locator('p:has-text("Dr. Lakmina Ekanayake")').first();
    await expect(docName).toBeVisible();

    // Check credentials are present
    const credential = page.locator('span:has-text("Patient-centered communication")').first();
    await expect(credential).toBeVisible();
  });
});
