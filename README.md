# Out of Office's Interview Assessment
This project is OOO's Front End Engineer Interview Assessment. You will be building "Out of Ice Cream", OOO's new (fictional) ice cream side-business.

We have estimated that this exercise will take ~4 hours. We ask that you not go over this limit. You may use any resources you wish.

This app is bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Run `npm i` and `npm start` to begin.

## General Overview
- [The design mockup is located here](https://marvelapp.com/prototype/2db5ei96/screen/84984522)
  - You can use the "Handoff" mode (bottom left hand corner) to get design details.
- To begin, fork this repo into your account and checkout into your machine.
- A shell of the web app has been provided. You will be expected to fill in whatever is necessary to complete the application.
  - We encourage you to use the existing directory structure.

## Expected Features
- Display all ice cream flavors provided in the mock data in `src/flavors.js`. This emulates a `fetch` call to an API on the parent. Therefore, this file should only be imported once.
- Allow users to sort ice cream flavors by price in ascending/descending order. The default sort order should be descending (marked as `High`).
- Allow users to add/remove ice cream quantities from their cart.
  - Note that a flavor quantity of `0` has a different design than a quantity of any other number.
- Ice cream quantities should be limited by the `maxQuantity` value in the `src/flavors.js`. The UI should reflect when the `maxQuantity` has been reached and not allow users to continue adding that flavor.
- Allow users the ability to see the shopping cart display. The number of items and total price should be updated as the quantities are modified.
- A user must be able to restore the entirety of the page upon refresh / closing of window. This includes the cart, chosen sort order, and anything else that is relevant.

## Judging Criteria
- Clean and reusable code.
- Demonstration of modern styling practices.
- Completion of all the "Expected Features".
- Assessment will be done using Chromium-based browsers, but we expect it to work on all major browsers.
- Responsive design is not required, but we do expect the app to work on all common desktop-sized screen sizes.
- The UI will be fed different data of the same structure as the mock data (`flavors.js`) and expected to work.
- Any extra features will be treated as a bonus! Feel free to use your imagination to improve the app in any way you feel.

## Available Scripts
In the project directory, you can run:

### `npm start`
Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.

You may also see any lint errors in the console.

## Delivery
Completion of your app should be committed to a public forked version of this repo on GitHub. If this is not possible, the project can be zipped and sent via email.

Regardless of method used, send the link to art@takemeoutofoffice.com upon completion.

Best of luck!