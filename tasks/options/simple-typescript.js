var grunt = require('grunt');

module.exports = {
  "tests": {
    moduleGenTarget: 'NamedAsynchronous',
    moduleName: function(path){
      return path.replace(new RegExp('^tmp/javascript/'), '');
    },
    files: [{
      "tmp/public/tests/tests.js": ["tmp/javascript/tests/**/*.ts"]
    }]
  },
  "app": {
    moduleGenTarget: 'NamedAsynchronous',
    moduleName: function(path){
      return path.replace(new RegExp('^tmp/javascript/'), '');
    },
    files: [{
      "tmp/public/assets/app.js": ["tmp/javascript/app/**/*.ts"]
    }]
  }
};
