First version of the Okay Pill landing page.

Run `yarn start`. The app will try to run on port 3002.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

See the readme for React [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

TODO:
- Move config read from component (Okay.js) to root
    use dotenv?

- Originally, Okay and NotOkay were going to be very different. Since they're not, it would be best to abstract their layout into one file and have them display text that's fed in based on the cookie, instead of the way it's done now (two nearly identical files)

- Remove Name from mailchimp form completely

- remove target blank

- remove react-mailchimp-form
