function react(options = {}) {
  const config = {};

  config.presets = {
    '@babel/preset-react': {
      corejs: 3,
      useBuiltIns: true,
      pragma: options.jsxPragma,
      pragmaFrag: options.jsxPragmaFrag,
      development: options.env === 'development'
    }
  };

  config.plugins = {
    '@babel/plugin-transform-react-inline-elements':
      options.env === 'production',
    '@babel/plugin-transform-react-constant-elements':
      options.env === 'production'
  };

  return config;
}

export default react;
