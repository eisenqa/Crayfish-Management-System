const { test, expect } = require('@playwright/test');

test.skip('Log in valid 1', async ({page}) => {

     await page.goto('https://crayfish-management-system-9zxa.vercel.app/login');

     await page.getByPlaceholder('Enter Email').fill('eisengamedrive@gmail.com');
     await page.getByPlaceholder('Enter password').fill('admin12345');

     await page.locator("//button[normalize-space()='Login']").click();

     await expect(page.getByText("Invalid email or password")).toBeVisible();

});

test.skip('Log in invalid 2', async ({page}) => {

     await page.goto('https://crayfish-management-system-9zxa.vercel.app/login');

     await page.getByPlaceholder('Enter Email').fill('eisendrive@gmail.com');
     await page.getByPlaceholder('Enter password').fill('admin12345');

     await page.locator("//button[normalize-space()='Login']").click();

     await expect(page.getByText("Invalid email or password")).toBeVisible();
});

test.skip('Log in invalid 3', async ({page}) => {

     await page.goto('https://crayfish-management-system-9zxa.vercel.app/login');

     await page.getByPlaceholder('Enter Email').fill('eisengamedrive@gmail.com');
     await page.getByPlaceholder('Enter password').fill('admin012345');

     await page.locator("//button[normalize-space()='Login']").click();

     await expect(page.getByText("Invalid email or password")).toBeVisible();
});

test('Log in invalid 4', async ({page}) => {

     await page.goto('https://crayfish-management-system-9zxa.vercel.app/login');

     await page.getByPlaceholder('Enter Email').fill('eisengdrive@gmail.com');
     await page.getByPlaceholder('Enter password').fill('admin012345');

     await page.locator("//button[normalize-space()='Login']").click();

     await expect(page.getByText("Invalid email")).toBeVisible();
});

test('Log in invalid 5', async ({page}) => {

     await page.goto('https://crayfish-management-system-9zxa.vercel.app/login');

     await page.getByPlaceholder('Enter Email').fill('');
     await page.getByPlaceholder('Enter password').fill('admin012345');

     await page.locator("//button[normalize-space()='Login']").click();

     await expect(page.getByText("Invalid email")).toBeVisible();
});

test.skip('Log in invalid 6', async ({page}) => {

     await page.goto('https://crayfish-management-system-9zxa.vercel.app/login');

     await page.getByPlaceholder('Enter Email').fill('eisengdrive@gmail.com');
     await page.getByPlaceholder('Enter password').fill('');

     await page.locator("//button[normalize-space()='Login']").click();

     await expect(page.getByText("Invalid email or password")).toBeVisible();
});

test.skip('Log in invalid 7', async ({page}) => {

     await page.goto('https://crayfish-management-system-9zxa.vercel.app/login');

     await page.getByPlaceholder('Enter Email').fill("' OR '1'='1");
     await page.getByPlaceholder('Enter password').fill('admin12345');

     await page.locator("//button[normalize-space()='Login']").click();

     await expect(page.getByText("Invalid email")).toBeVisible();
});

test.skip('Log in invalid 8', async ({page}) => {

     await page.goto('https://crayfish-management-system-9zxa.vercel.app/login');

     await page.getByPlaceholder('Enter Email').fill("' OR '1'='1");
     await page.getByPlaceholder('Enter password').fill("' OR '1'='1");

     await page.locator("//button[normalize-space()='Login']").click();

     await expect(page.getByText("Invalid email")).toBeVisible();
});


