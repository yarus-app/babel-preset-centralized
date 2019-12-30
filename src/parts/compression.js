const allDisabled = {
  booleans: false,
  builtIns: false,
  consecutiveAdds: false,
  deadcode: false,
  evaluate: false,
  flipComparisons: false,
  guards: false,
  infinity: false,
  mangle: false,
  memberExpressions: false,
  mergeVars: false,
  numericLiterals: false,
  propertyLiterals: false,
  regexpConstructors: false,
  removeUndefined: false,
  replace: false,
  simplify: false,
  simplifyComparisons: false,
  typeConstructors: false,
  undefinedToVoid: false
};

const mediumCompression = {
  // Based on a black list of too agressive plugins/settings

  // Settings
  keepFnName: true,
  keepClassName: true,

  // Disable Agressive Plugins
  builtIns: false,
  booleans: false,
  evaluate: false,
  infinity: false,
  mangle: false,
  flipComparisons: false,
  simplify: false
};

const lowCompression = {
  // Based on a white list
  // All disabled + a few things enabled
  ...allDisabled,

  // Settings
  keepFnName: true,
  keepClassName: true,

  // Enable only very basic plugins
  deadcode: true,
  guards: true,
  memberExpressions: true,
  propertyLiterals: true,
  regexpConstructors: true,
  removeUndefined: true,
  simplifyComparisons: true,
  typeConstructors: true
};

function compression(options = {}) {
  const config = {};

  const compressionOptions =
    options.env === 'production' ? { mangle: false } : mediumCompression;

  config.presets = {
    'babel-preset-minify': options.minified
      ? compressionOptions
      : lowCompression
  };

  return config;
}

export default compression;
