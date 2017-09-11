const environment = {
  development: {
    isProduction: false,
    apiUrl: 'https://'
  },
  production: {
    isProduction: true,
    apiUrl: 'https://'
  }
}[process.env.NODE_ENV || 'development'];

let AuthToken;

module.exports = Object.assign(
  {},
  environment
);
