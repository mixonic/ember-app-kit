module.exports = {
  app: {
    src: [
      'tmp/public/assets/app.js'
    ],
    options: { jshintrc: '.jshintrc' }
  },

  tooling: {
    src: [
      'Gruntfile.js',
      'tasks/**/*.js'
    ],
    options: { jshintrc: 'tasks/.jshintrc' }
  },

  tests: {
    src: [
      'tmp/public/tests/tests.js'
    ],
    options: { jshintrc: 'tests/.jshintrc' }
  },

  options: {
    force: true
  }
};
