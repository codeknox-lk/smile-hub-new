import { test, expect } from "@playwright/test";

test.describe("Splash Screen Responsiveness & Behavior", () => {
  test("should load the splash screen, lock scroll, and animate out on first visit", async ({ page }) => {
    // Navigate to homepage
    await page.goto("/");

    // 1. Immediately verify the logo is visible
    const logo = page.locator('img[alt="Smile Hub Logo"]');
    await expect(logo).toBeVisible();

    // 2. Verify body scroll lock is active
    const overflow = await page.evaluate(() => window.getComputedStyle(document.body).overflow);
    expect(overflow).toBe("hidden");

    // 3. Wait for the 2.0s splash screen timeout + 0.6s exit transition to complete
    await page.waitForTimeout(2800);

    // 4. Verify splash screen is removed/hidden
    await expect(logo).not.toBeVisible();

    // 5. Verify scroll lock is released
    const updatedOverflow = await page.evaluate(() => window.getComputedStyle(document.body).overflow);
    expect(updatedOverflow).not.toBe("hidden");
  });

  test("should bypass splash screen on second visit (sessionStorage tracking)", async ({ page }) => {
    // Navigate and let the splash screen run once
    await page.goto("/");
    await page.waitForTimeout(2800);

    // Re-navigate to homepage in the same session
    await page.goto("/");

    // Verify logo is not visible immediately
    const logo = page.locator('img[alt="Smile Hub Logo"]');
    await expect(logo).not.toBeVisible();

    // Verify body scroll is not locked
    const nextOverflow = await page.evaluate(() => window.getComputedStyle(document.body).overflow);
    expect(nextOverflow).not.toBe("hidden");
  });

  test("should bypass splash screen completely on subpages", async ({ page }) => {
    // Navigate directly to contact page
    await page.goto("/contact");

    // Verify logo is not visible immediately
    const logo = page.locator('img[alt="Smile Hub Logo"]');
    await expect(logo).not.toBeVisible();
  });
});
