/**
 * package.json元数据
 */

module.exports = {

  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'Project name',
    },
    description: {
      type: 'string',
      required: false,
      message: 'Project description',
      default: 'A Vue.js project with ziu',
    },
    author: {
      type: 'string',
      message: 'Author',
    },
    build: {
      type: 'list',
      message: 'Vue build',
      choices: [
        {
          name: 'Runtime + Compiler: recommended for most users',
          value: 'standalone',
          short: 'standalone',
        },
        {
          name:
            'Runtime-only: about 6KB lighter min+gzip, but templates (or any Vue-specific HTML) are ONLY allowed in .vue files - render functions are required elsewhere',
          value: 'runtime',
          short: 'runtime',
        },
      ],
    },
    router: {
      type: 'confirm',
      message: 'Install vue-router?',
    },
    lint: {
      type: 'confirm',
      message: 'Use ESLint to lint your code?',
    },
    lintConfig: {
      when: 'lint',
      type: 'list',
      message: 'Pick an ESLint preset',
      choices: [
        {
          name: 'Standard (https://github.com/standard/standard)',
          value: 'standard',
          short: 'Standard',
        },
        // {
        //   name: 'Airbnb (https://github.com/airbnb/javascript)',
        //   value: 'airbnb',
        //   short: 'Airbnb',
        // },
        {
          name: 'none (configure it yourself)',
          value: 'none',
          short: 'none',
        },
      ],
    },
    sass: {
      type: 'confirm',
      message: 'Use sass?'
    },
    gitCommitMsg: {
      type: 'confirm',
      message: 'Use commitlint to check commit message?(Angular Commit Message)',
    },
    // nodesass: {
    //     when: 'sass',
    //     type: 'confirm',
    //     message: 'Install node-sass?'
    // },
    // unit: {
    //     type: 'confirm',
    //     message: 'Set up unit tests',
    // },
    // runner: {
    //     when: 'unit',
    //     type: 'list',
    //     message: 'Pick a test runner',
    //     choices: [
    //         {
    //             name: 'Jest',
    //             value: 'jest',
    //             short: 'jest',
    //         },
    //         {
    //             name: 'Karma and Mocha',
    //             value: 'karma',
    //             short: 'karma',
    //         },
    //         {
    //             name: 'none (configure it yourself)',
    //             value: 'noTest',
    //             short: 'noTest',
    //         },
    //     ],
    // },
    // e2e: {
    //     type: 'confirm',
    //     message: 'Setup e2e tests with Nightwatch?',
    // }
  },
  filters: {
    '.eslintrc.js': 'lint',
    '.eslintignore': 'lint',
    'config/test.env.js': 'unit || e2e',
    'build/webpack.test.conf.js': "unit && runner === 'karma'",
    'test/unit/**/*': 'unit',
    'test/unit/index.js': "unit && runner === 'karma'",
    'test/unit/jest.conf.js': "unit && runner === 'jest'",
    'test/unit/karma.conf.js': "unit && runner === 'karma'",
    'test/unit/specs/index.js': "unit && runner === 'karma'",
    'test/unit/setup.js': "unit && runner === 'jest'",
    'test/e2e/**/*': 'e2e',
    'src/router/**/*': 'router',
    'commitlint.config.js': 'gitCommitMsg',
  },
};