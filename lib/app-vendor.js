var braintree = require('./vendor/braintree-2.9.0');

if (typeof braintree.setup === 'function') {
  console.log('braintree.js is available');
}
