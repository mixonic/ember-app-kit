var grunt = require('grunt');

module.exports = {
  "tests": {
    moduleGenTarget: 'NamedAsynchronous',
    moduleName: function(path){
      return path.replace(new RegExp('^tmp/javascript/'), '');
    },
    files: [{
      expand: true,
      cwd: 'tmp/javascript/tests/',
      src: "**/*.ts",
      dest: "tmp/public/tests/",
      ext: '.js'
    }]
  },
  "app": {
    moduleGenTarget: 'NamedAsynchronous',
    moduleName: function(path){
      return path.replace(new RegExp('^tmp/javascript/'), '');
    },
    files: [{
      expand: true,
      cwd: 'tmp/javascript/app/',
      src: "**/*.ts",
      dest: "tmp/public/assets/",
      ext: '.js'
    }]
  }
};
