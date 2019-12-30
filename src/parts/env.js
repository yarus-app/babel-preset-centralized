function env(options = {}) {
  const config = {};

  config.presets = {
    '@babel/preset-env': {
      // Setting this to false will not transform modules.
      modules: options.modules,

      // Prefer built-ins which also prefers global polyfills which is the right thing to do
      // for most scenarios like SPAs and NodeJS environments.
      useBuiltIns: 'usage',

      // Using modern CoreJS Polyfills
      corejs: 3,

      // Options to tweak the details of the implementation. If both are `false` the environment
      // preset is executed in default mode.
      loose: options.loose,
      spec: options.spec,

      // Debug output of features, plugins and presets which are enabled.
      debug: false,

      // We prefer the transpilation of the "fast-async" plugin over the
      // slower and more complex Babel internal implementation.
      exclude: [
        // We use fast-async and not the very large and slow output of the
        // transpilation to generator functions.
        'transform-regenerator',
        'transform-async-to-generator',
        // Inspired by CreateReactApp, we disable this minor support as it
        // is documented to "make all code slower".
        'transform-typeof-symbol'
      ],

      // Differ between development and production for our scope.
      // NodeJS is generally fine in development to match the runtime version which is currently installed.
      targets: options.targets
    }
  };

  config.plugins = {
    '@babel/plugin-transform-runtime': !options.runtimeHelpers
      ? false
      : {
          absoluteRuntime: false,
          corejs: 3,
          helpers: true,
          regenerator: false,
          useESModules: options.modules === 'esm'
        },
    'module:fast-async': true
  };

  return config;
}

export default env;
