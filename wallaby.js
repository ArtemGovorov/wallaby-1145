module.exports = function () {

  return {
    files: ['src/**/*.js'],

    tests: ['test.js'],

    env: {
      type: 'node'
    },

    testFramework: 'jest'
  };
};