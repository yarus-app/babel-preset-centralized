function proposals(options = {}) {
  const config = {};

  config.plugins = {
    // Stage 0
    '@babel/plugin-proposal-function-bind': {},

    // Stage 1
    '@babel/plugin-proposal-export-default-from': {},
    '@babel/plugin-proposal-logical-assignment-operators': {},
    '@babel/plugin-proposal-optional-chaining': { loose: options.loose },
    '@babel/plugin-proposal-pipeline-operator': { proposal: 'minimal' },
    '@babel/plugin-proposal-nullish-coalescing-operator': {
      loose: options.loose
    },
    '@babel/plugin-proposal-do-expressions': {},

    // Stage 2
    '@babel/plugin-proposal-decorators': { legacy: true },
    '@babel/plugin-proposal-function-sent': {},
    '@babel/plugin-proposal-export-namespace-from': {},
    '@babel/plugin-proposal-numeric-separator': {},
    '@babel/plugin-proposal-throw-expressions': {},

    // Stage 3
    '@babel/plugin-syntax-dynamic-import': {},
    '@babel/plugin-syntax-import-meta': {},
    '@babel/plugin-proposal-class-properties': {
      corejs: 3,
      loose: options.loose
    },
    '@babel/plugin-proposal-json-strings': {},

    '@babel/plugin-proposal-object-rest-spread': {
      corejs: 3,
      useBuiltIns: true,
      loose: options.loose
    },

    '@babel/plugin-proposal-optional-catch-binding': {}
  };

  return config;
}

export default proposals;
