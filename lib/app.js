var braintree = require('braintree-web');

if (typeof braintree.setup === 'function') {
  console.log('braintree.js is available');
}
