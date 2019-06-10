const minimist = require('minimist'),
  PRJ_ENV = minimist(process.argv.slice(2))._[0] || 'production';

process.env.NODE_ENV = 'production';

if (PRJ_ENV === 'development') {
  process.env.NODE_ENV = PRJ_ENV;
}
process.env.PRJ_ENV = PRJ_ENV;

switch (PRJ_ENV) {
  case 'testing':
    require('./testing');
    break;
  case 'staging':
    require('./staging');
    break;
  case 'production':
    require('./build');
    break;
}
