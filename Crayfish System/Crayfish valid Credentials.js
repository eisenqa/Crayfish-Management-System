const { test, expect } = require('@playwright/test');


test.skip('Register new user', async ({ page }) => {

  await page.goto('https://crayfish-management-system-9zxa.vercel.app/register');
  
    await page.getByPlaceholder('Enter username').fill('eisensuba');
    await page.getByPlaceholder('Enter email').fill('eisensuba@gmail.com');
    await page.getByPlaceholder('Enter password').fill('qwerty123');

    await page.click("//button[normalize-space()='Register']");

  await expect(page).toHaveURL(/dashboard/);
});

test.beforeEach(async ({ page }) => {
  await page.goto('https://crayfish-management-system-9zxa.vercel.app/login');

  await page.getByPlaceholder('Enter email').fill('eisengamedrive@gmail.com');
  await page.getByPlaceholder('Enter password').fill('admin12345');

  await page.click("//button[normalize-space()='Login']");

  await expect(page).toHaveURL('https://crayfish-management-system-9zxa.vercel.app/dashboard');
});

test.describe.serial('Habitat Flow', () => {

  test('Create habitat', async ({ page }) => {
    await page.locator("//img[@alt='Habitat']").click();

    await page.getByRole('button', { name: '+ Add Habitat' }).click();

    await page.getByPlaceholder('e.g. Pond Alpha').fill('Gamma');
    await page.getByPlaceholder('e.g. Red Swamp Crayfish').fill('Red Swamp Crayfish');
    await page.selectOption('select.form-select', 'Crayling');
    await page.getByPlaceholder('e.g. 120').fill('120');

    await page.getByRole('button', { name: 'Add Habitat', exact: true }).click();

    await expect(page.getByText('Gamma')).toBeVisible();
  });

  test ('Edit habitat', async ({ page }) => {
    await page.locator("//img[@alt='Habitat']").click();

    await page.getByRole('button', { name: 'Edit' }).first().click();
    await page.getByPlaceholder('e.g. 120').fill('150');
    await page.getByRole('button', { name: 'Save Changes' }).click();

    await expect(page.getByPlaceholder('e.g. 120')).toHaveValue('150');

  });

  test ('Delete', async ({page}) => {
    
      await page.locator("//img[@alt='Habitat']").click();
      await expect(page).toHaveURL(/habitats/);
      await page.getByRole('button', {name: 'Delete'});
  });
  
  //This is for harvest but the problem is that the placeholder is changing everytime so this is use for one time only
  test ('Sales stock', async ({ page }) => {

    await page.locator("img[alt='Sales Stock']").click();
    await page.getByRole('button', { name: '+ Harvest Stock' }).click();


   await page.locator("div[class='form-group'] Gamma")

    await page.getByPlaceholder('Available: 0').fill('100');
    await page.getByPlaceholder('e.g. 150.00').fill('140');

    await page.locator(':text-is("Harvest")').click();

    await page.getByRole('button', {name: "Sell"}).click();
    await page.getByRole('button', {name: "Edit"}).click();
    await page.getByRole('button', {name: "Delete"}).click();


  }); 
  test ('Habitat Report', async ({page}) => {

    await page.locator("//img[@alt='Report']").click();

    await page.locator('button').filter({ hasText: 'Generate Report' }).first().click();

  });

  test ('Sales Stock Report', async ({page}) => {

    await page.locator("//img[@alt='Report']").click();

    await page.locator('button').filter({ hasText: 'Generate Report' }).nth(1).click();

  });

  test ('Lifecycle Report', async ({page}) => {

   await page.locator("//img[@alt='Report']").click();

    await page.locator('button').filter({ hasText: 'Generate Report' }).nth(2).click();
  
  });

  test ('Activity Report', async ({page}) => {

    await page.locator("//img[@alt='Report']").click();

    await page.locator('button').filter({ hasText: 'Generate Report' }).nth(3).click();
  
  });

});