braintree-webpack-demo
======================

## Install

```bash
$ npm i
```

## Build

```bash
$ npm run build
```

This will run two build tasks: 

**`npm run build:npm`**

This will build a bundle from [app.js](lib/app.js) which includes [`braintree-web`](https://github.com/braintree/braintree-web) from [npm](https://www.npmjs.com/package/braintree-web) (this version is minified).

The built file will be `app-built.js` in the `dist/` directory.

**`npm run build:vendor`**

This will build a bundle from [app-vendor.js](lib/app-vendor.js) which includes a vendored version of `braintree.js` which is [unminified](https://js.braintreegateway.com/js/braintree-2.9.0.js). 

The built file will be `app-built-vendor.js` in the `dist/` directory.

## Browser

Run the [`index.html`](./index.html) file in your browser to verify that the builds have included `braintree.js` as expected.
