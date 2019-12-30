function typescript(options = {}) {
  const config = {};

  config.presets = {
    '@babel/preset-typescript': {
      isTSX: true,
      jsxPragma: options.jsxPragma,
      allExtensions: true
    }
  };

  return config;
}

export default typescript;
