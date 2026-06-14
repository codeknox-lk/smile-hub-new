import { test, expect } from "@playwright/test";

test.describe("Gallery Page Responsiveness & Interaction", () => {
  test.beforeEach(async ({ page }) => {
    // Navigate directly to the gallery page
    await page.goto("/gallery");
  });

  test("should not have horizontal layout overflows at 320px viewport", async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 568 });
    await page.waitForTimeout(1000); // Let layout settle

    const overflowActive = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });
    expect(overflowActive).toBe(false);
  });

  test("should display GalleryHero section properly", async ({ page }) => {
    // Check for the eyebrow/title
    const title = page.locator('h1:has-text("Our")').first();
    await expect(title).toBeVisible();

    // Check that collage decorative badge is visible
    const decorativeBadge = page.locator('span:has-text("✦ Immersive Experience")').first();
    await expect(decorativeBadge).toBeVisible();
  });

  test("should display GalleryHorizontalScroll walkthrough section on desktop", async ({ page }) => {
    await page.setViewportSize({ width: 1200, height: 800 });
    // Verify the desktop layout elements
    const desktopIntro = page.locator('section.hidden.lg\\:block h2:has-text("Take a walk")').first();
    await expect(desktopIntro).toBeVisible();
  });

  test("should display GalleryHorizontalScroll swipe section on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    // Verify the mobile layout elements
    const mobileIntro = page.locator('section.block.lg\\:hidden h2:has-text("Take a walk")').first();
    await expect(mobileIntro).toBeVisible();

    const swipeIndicator = page.locator('span:has-text("Swipe to explore")').first();
    await expect(swipeIndicator).toBeVisible();
  });
});
