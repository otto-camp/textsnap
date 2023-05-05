import { expect, test } from "@playwright/test";

test("upload file", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page
    .getByLabel("image")
    .setInputFiles("test-assets/testimage.png")
    .then(async () => {
      await page.waitForSelector("img");
      await expect(page.getByTestId("text")).toContainText(
        "Called Laila by Morroco and Tura by Spain, the island is claimed by both countries as their territory. "
      );
    });
});
