import { test, expect } from "@playwright/test";

test.describe("Contact Page Responsiveness & Interaction", () => {
  test.beforeEach(async ({ page }) => {
    // Navigate directly to the contact page
    await page.goto("/contact");
  });

  test("should not have horizontal layout overflows at 320px viewport", async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 568 });
    await page.waitForTimeout(1000); // Let layout settle

    const overflowActive = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });
    expect(overflowActive).toBe(false);
  });

  test("should display contact hero details and info blocks", async ({ page }) => {
    // Check main title is present
    const title = page.locator('h1').first();
    await expect(title).toBeVisible();

    // Check Google Maps link exists
    const mapsLink = page.locator('a:has-text("Peradeniya Road, Kandy")').first();
    await expect(mapsLink).toBeVisible();

    // Check Live Status Badge exists
    const statusBadge = page.locator('p:has-text("Live Status")').first();
    await expect(statusBadge).toBeVisible();
  });
});
