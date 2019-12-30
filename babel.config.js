module.exports = api => {
  const envName = api.env();

  const options = envName.split('-').reduce((acc, curr) => {
    const [name, value] = curr.split(':');
    acc[name] = value;
    return acc;
  }, {});

  const env = options.env || process.env.NODE_ENV || 'development';
  const module = options.module || process.env.MODULE || 'cls';
  const caller =
    options.caller ||
    api.caller(inst => (inst && inst.name) || 'any') ||
    '@babel/cli';

  const isBabelCli = caller === '@babel/cli';
  const isBabelNode = caller === '@babel/node';
  const isWebpack = caller === 'babel-loader';
  const isRollup = caller === 'rollup-plugin-babel';
  const isJest = caller === 'babel-jest';

  api.cache.using(() => `${env}-${module}-${caller}`);

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 12
          },
          modules: env === 'test' ? 'commonjs' : false,
          corejs: 3,
          useBuiltIns: 'usage',
          loose: true,
          exclude: ['transform-async-to-generator', 'transform-regenerator']
        }
      ]
    ],
    plugins: [
      // ['@babel/plugin-transform-runtime', {
      //   corejs: false,
      //   helpers: true,
      //   regenerator: false,
      //   useESModules: false
      // }]
    ]
  };
};
