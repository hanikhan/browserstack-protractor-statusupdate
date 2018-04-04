# protractor-browserstack

[Protractor](https://github.com/angular/protractor/) Integration with BrowserStack.

![BrowserStack Logo](https://d98b8t1nnulk5.cloudfront.net/production/images/layout/logo-header.png?1469004780)

<img src ="http://nchaulet.github.io/slide-protractor-lyonjs/images/protractor-logo.png" height = "100">

## Setup

* Clone the repo
* Install dependencies `npm install`
* Update `*.conf.js` files inside the `conf/` directory with your [BrowserStack Username and Access Key](https://www.browserstack.com/accounts/settings)

## Running your tests
* To run a single test, run `npm run single`

If a test/spec fails for the above command, the status will be auto updated on the BrowserStack Automate dashboard