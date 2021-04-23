# Frontend Automation Challenge

How to run?

Clone this repo and run:

```
npm install
npm run cypress:open
```

This challenge is from [Wizeline.](https://www.wizeline.com/careers/)

1 - Create a new automation project with the framework/language you feel more comfortable with.

2 - Use POM to structure the new project.

3 - Automate the given scenarios for the sample page https://www.saucedemo.com/ provided:

- Login with a valid user. Expected: Validate the user navigates to the account page when logged in.
- Login with an invalid user. Expected: Validate error message is displayed.
- Logout from the home page. Expected: Validate the user navigates to the login page.
- Sort products by Price (low to high). Expected: Validate the products have been sorted by price correctly
- Add multiple items to the shopping cart. Expected: Validate all the items that have been added to the shopping cart.
- Add the specific product ‘Sauce Labs Onesie’ to the shopping cart. Expected: Validate the correct product was added to the cart.
- Complete a purchase. Expected: Validate the user navigates to the order confirmation page.

## Bonus

This section contains some items that might be added to the automation but are not required to deliver:

Data provider for the test data.
Test data reporter.
Multi-browser testing.
