function convenience(options = {}) {
  const config = {};

  config.plugins = {
    'babel-plugin-macros': true,
    'babel-plugin-module-resolver': !options.sourceFolder
      ? false
      : {
          alias: {
            '~': options.sourceFolder
          }
        }
  };

  return config;
}

export default convenience;
