import { test, expect } from '@playwright/test';

import dotenv from 'dotenv';
dotenv.config();

test('TC001 - Valid Login', async ({ page }) => {

    // Launch Demoblaze
    await page.goto('https://www.demoblaze.com/');

    // Click Login button
    await page.locator('#login2').click();

    // Enter username
    await page.locator('#loginusername').fill(process.env.DEMOBLAZE_USERNAME);

    // Enter password
    await page.locator('#loginpassword').fill(process.env.DEMOBLAZE_PASSWORD);

    // Click Login inside popup
    await page.locator('button[onclick="logIn()"]').click();

    // Verify logout button visible
    await expect(page.locator('#nameofuser')).toContainText('Welcome', { timeout: 15000 });
    await expect(page.locator('#logout2')).toBeVisible({ timeout: 15000 });

});

test('TC002 - Invaild Login', async ({ page }) => {

    // Launch demoblaze
    await page.goto('https://www.demoblaze.com/');

    //Click Login button
    await page.locator('#login2').click();

    // Enter invalid username
    await page.locator('#loginusername').fill('wronguser');

    // Enter invalid password
    await page.locator('#loginpassword').fill('wrongpass');

    // Click login button
    await page.locator('button[onclick="logIn()"]').click();
});

test('TC003 - Add Product To Cart', async ({ page }) => {

     // Launch demoblaze
    await page.goto('https://www.demoblaze.com/');

    //Click Samsung Galaxy S6
    await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();

    //Add product to cart
    await page.getByText('Add to cart').click();
});

test('TC004 - Remove Product From Cart', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/');

    // Open Product
    await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();

    // Accept dialog
    await page.once('dialog', async dialog => {
        await dialog.accept();
});

     //Add to Cart
    await page.getByText('Add to cart').click();

    // Open Cart
    await page.locator('#cartur').click();

    // Delete Product
    await page.getByText('Delete').click();

    // Wait for Product to disappear
    await expect(page.locator('td').filter({ hasText: 'Samsung galaxy s6' }))
    .toHaveCount(0, { timeout: 10000 });
});

test('TC005 - Place Order', async ({ page }) => {

     await page.goto('https://www.demoblaze.com/');

    // Open Product
    await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();

    // Accept alert
    page.once('dialog', async dialog => {
    await dialog.accept();
    });

    // Add to cart
    await page.getByText('Add to cart').click();

    // Open Cart
    await page.locator('#cartur').click();

    // Place Order
    await page.getByRole('button', { name: 'Place Order' }).click();

    // Fill in Details
    await page.locator('#name').fill('KS');
    await page.locator('#country').fill('United Kingdam');
    await page.locator('#city').fill('London');
    await page.locator('#card').fill('4111222233335678');
    await page.locator('#month').fill('06');
    await page.locator('#year').fill('2026');

    // Purchase
    await page.getByRole('button', { name: 'Purchase' }).click();

    await expect(page.getByText('Thank you for your purchase')).toBeVisible();
});

test('TC006 - Logout', async ({ page }) => {

    // Launch Demoblaze
    await page.goto('https://www.demoblaze.com/');

    // Click Login button
    await page.locator('#login2').click();

    // Enter username
    await page.locator('#loginusername').fill(process.env.DEMOBLAZE_USERNAME);

    // Enter password
    await page.locator('#loginpassword').fill(process.env.DEMOBLAZE_PASSWORD);

    // Click Login inside popup
    await page.locator('button[onclick="logIn()"]').click();

    await expect(page.locator('#nameofuser')).toContainText('Welcome', { timeout: 15000 });
    await expect(page.locator('#logout2')).toBeVisible({ timeout: 15000 });

    // Logout
    await page.locator('#logout2').click();

    // Verify login button visible again
    await expect(page.locator('#login2')).toBeVisible({ timeout: 15000 });
    await expect(page.locator('#logout2')).toBeHidden({ timeout: 15000 });

});