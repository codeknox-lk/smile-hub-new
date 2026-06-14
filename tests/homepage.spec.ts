import { test, expect } from "@playwright/test";

test.describe("Homepage Hero & Navigation Responsiveness", () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to homepage and wait for the splash screen to fade out
    await page.goto("/");
    await page.waitForTimeout(2800);
  });

  test("should lock body scroll when mobile navigation menu is opened", async ({ page }) => {
    // 1. Set viewport to mobile screen
    await page.setViewportSize({ width: 375, height: 812 });

    // 2. Locate the mobile menu hamburger button (the button in header that isn't hidden)
    const hamburgerBtn = page.locator("header button.lg\\:hidden");
    await expect(hamburgerBtn).toBeVisible();

    // 3. Open mobile menu
    await hamburgerBtn.click();

    // 4. Verify body scroll is locked
    const overflow = await page.evaluate(() => window.getComputedStyle(document.body).overflow);
    expect(overflow).toBe("hidden");

    // 5. Close mobile menu
    await hamburgerBtn.click();

    // Wait for exit transition (300ms) to finish and style tag to unmount
    await page.waitForTimeout(500);

    // 6. Verify body scroll is unlocked
    const overflowAfterClose = await page.evaluate(() => window.getComputedStyle(document.body).overflow);
    expect(overflowAfterClose).not.toBe("hidden");
  });

  test("should not have horizontal layout overflows at 320px viewport", async ({ page }) => {
    // Set viewport to very narrow mobile device size (iPhone SE)
    await page.setViewportSize({ width: 320, height: 568 });
    await page.waitForTimeout(1000); // Wait for animations to settle

    // Assert that the page's scrollable width is exactly equal to the viewport width
    const overflowActive = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });

    expect(overflowActive).toBe(false);
  });

  test("should navigate to subpages correctly via desktop navigation menu", async ({ page }) => {
    // Ensure we are on desktop size
    await page.setViewportSize({ width: 1280, height: 800 });

    // Locate the "About" link and click it
    const aboutLink = page.locator("header nav a", { hasText: "About" }).first();
    await expect(aboutLink).toBeVisible();
    await aboutLink.click();

    // Confirm navigation occurred
    await expect(page).toHaveURL(/\/about$/);
  });

  test("should display treatment cards and allow clicking category link", async ({ page }) => {
    // Locate the last treatment stack item link (never covered by sticky stack overlays)
    const treatmentLink = page.locator('span:has-text("Begin Your Treatment Journey")').last();
    await expect(treatmentLink).toBeVisible();

    // Click on the link using force to bypass sticky header overlap interception
    await treatmentLink.click({ force: true });
    await expect(page).toHaveURL(/\/treatments\/[a-z-]+$/);
  });

  test("should display the before/after interactive slider", async ({ page }) => {
    // Check if the range input slider exists
    const sliderInput = page.locator('input[type="range"][aria-label="Adjust Before and After view ratio"]');
    await expect(sliderInput).toBeVisible();

    // Verify default value is 50
    const value = await sliderInput.getAttribute("value");
    expect(value).toBe("50");
  });

  test("should display bento grid cards correctly", async ({ page }) => {
    // Check if the main value prop card (Bento Hero) is present
    const mainBentoCard = page.locator('article h3:has-text("The Clinical Standard")');
    await expect(mainBentoCard).toBeVisible();

    // Check if the bento highlights are present
    const highlightCard = page.locator('article h4').first();
    await expect(highlightCard).toBeVisible();
  });

  test("should transition reviews in the carousel on clicking arrows", async ({ page }) => {
    // Locate the first review text initially visible
    const reviewTextLocator = page.locator("p.font-serif.italic");
    const initialReviewText = await reviewTextLocator.innerText();

    // Click the "Next" button in the carousel
    const nextBtn = page.locator('button[aria-label="Next review"]');
    await expect(nextBtn).toBeVisible();
    await nextBtn.click({ force: true });

    // Verify the text content changes (representing a slide transition)
    await expect(reviewTextLocator).not.toHaveText(initialReviewText);
  });

  test("should display footer links and contact details", async ({ page }) => {
    // Scroll to the footer
    const footer = page.locator("footer");
    await expect(footer).toBeVisible();

    // Verify branding or copyright signals in footer are present
    const footerText = page.locator('footer h2:has-text("Redefining dental care in Kandy.")');
    await expect(footerText).toBeVisible();

    // Verify navigation links are present in footer
    const footerNavLinks = page.locator("footer a");
    const count = await footerNavLinks.count();
    expect(count).toBeGreaterThan(3);
  });

  test("should stack doctor card and navy banner on mobile without covering philosophy text", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.waitForTimeout(1000);

    const doctorCard = page.locator('article:has-text("Smile Hub Clinical Team")');
    const philosophyText = page.locator('article:has-text("Clinical Philosophy") h3');

    await expect(doctorCard).toBeVisible();
    await expect(philosophyText).toBeVisible();

    const doctorBox = await doctorCard.boundingBox();
    const philosophyBox = await philosophyText.boundingBox();

    if (doctorBox && philosophyBox) {
      // The philosophy text should be positioned vertically below the bottom of the doctor card
      expect(philosophyBox.y).toBeGreaterThan(doctorBox.y + doctorBox.height);
    }
  });

  test("should position doctor card and navy banner correctly on desktop layout", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.waitForTimeout(1000);

    const doctorCard = page.locator('article:has-text("Smile Hub Clinical Team")');
    const philosophyText = page.locator('article:has-text("Clinical Philosophy") h3');

    await expect(doctorCard).toBeVisible();
    await expect(philosophyText).toBeVisible();

    const doctorBox = await doctorCard.boundingBox();
    const philosophyBox = await philosophyText.boundingBox();

    if (doctorBox && philosophyBox) {
      // On desktop, the doctor card is absolutely positioned at the top,
      // and philosophy text is aligned lower down.
      expect(doctorBox.y).toBeLessThan(philosophyBox.y);
    }
  });
});

