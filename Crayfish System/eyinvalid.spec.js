const { test, expect } = require('@playwright/test');

test.describe('Registration - Invalid Inputs', () => {

  test('Empty username', async ({ page }) => {
    await page.goto('https://crayfish-management-system-9zxa.vercel.app/register');

    await page.getByPlaceholder('Enter username').fill('');
    await page.getByPlaceholder('Enter email').fill('test@gmail.com');
    await page.getByPlaceholder('Enter password').fill('qwerty123');

    await page.click("//button[normalize-space()='Register']");

    await expect(page).toHaveURL(/register/);
  });

  test('Invalid email format', async ({ page }) => {
    await page.goto('https://crayfish-management-system-9zxa.vercel.app/register');

    await page.getByPlaceholder('Enter username').fill('eisensuba');
    await page.getByPlaceholder('Enter email').fill('invalid-email');
    await page.getByPlaceholder('Enter password').fill('qwerty123');

    await page.click("//button[normalize-space()='Register']");

    await expect(page).toHaveURL(/register/);
  });

  test('Empty email', async ({ page }) => {
    await page.goto('https://crayfish-management-system-9zxa.vercel.app/register');

    await page.getByPlaceholder('Enter username').fill('eisensuba');
    await page.getByPlaceholder('Enter email').fill('');
    await page.getByPlaceholder('Enter password').fill('qwerty123');

    await page.click("//button[normalize-space()='Register']");

    await expect(page).toHaveURL(/register/);
  });

  test('Empty password', async ({ page }) => {
    await page.goto('https://crayfish-management-system-9zxa.vercel.app/register');

    await page.getByPlaceholder('Enter username').fill('eisensuba');
    await page.getByPlaceholder('Enter email').fill('test@gmail.com');
    await page.getByPlaceholder('Enter password').fill('');

    await page.click("//button[normalize-space()='Register']");

    await expect(page).toHaveURL(/register/);
  });

  test('Password too short', async ({ page }) => {
    await page.goto('https://crayfish-management-system-9zxa.vercel.app/register');

    await page.getByPlaceholder('Enter username').fill('eisensuba');
    await page.getByPlaceholder('Enter email').fill('test@gmail.com');
    await page.getByPlaceholder('Enter password').fill('123');

    await page.click("//button[normalize-space()='Register']");

    await expect(page).toHaveURL(/register/);
  });

  test('Duplicate email', async ({ page }) => {
    await page.goto('https://crayfish-management-system-9zxa.vercel.app/register');

    await page.getByPlaceholder('Enter username').fill('newuser');
    await page.getByPlaceholder('Enter email').fill('eisengamedrive@gmail.com'); // existing account
    await page.getByPlaceholder('Enter password').fill('qwerty123');

    await page.click("//button[normalize-space()='Register']");

    // Replace with actual error message shown by your system
    await expect(page.getByText(/already exists/i)).toBeVisible();
  });

  test('Username with special characters', async ({ page }) => {
    await page.goto('https://crayfish-management-system-9zxa.vercel.app/register');

    await page.getByPlaceholder('Enter username').fill('@#$%^&*');
    await page.getByPlaceholder('Enter email').fill('test@gmail.com');
    await page.getByPlaceholder('Enter password').fill('qwerty123');

    await page.click("//button[normalize-space()='Register']");

    await expect(page).toHaveURL(/register/);
  });

});