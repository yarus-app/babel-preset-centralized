export default {
  // Select environment where we are in for the current job.
  // One the the following:
  // - "development": During development of applications, publishing of libraries containing debug code
  // - "production": Publishing application to the public, publishing of clean non-debug code containing libraries and command line applications.
  // - "test": Used for testing e.g. with Ava or Jest test runners.
  // - "auto": Automatically using the `EDGE_ENV` or `NODE_ENV` environment variables.
  env: process.env.NODE_ENV || 'development',

  // Injected helper code to save on codesize.
  runtimeHelpers: true,

  // Describes the environments you support/target for your project.
  targets: undefined,

  // Choose whether and how imports should be processed.
  // - "cjs": Transpile module imports to CommonJS
  // - false: Keep module imports
  // - "auto": Automatic selection based on `target`.
  modules: 'auto',

  // Replace the function used when compiling JSX expressions. Default: React.
  // See also: https://www.npmjs.com/package/@babel/preset-react
  jsxPragma: null,

  // Replace the component used when compiling JSX fragments. Default: React.
  // See also: https://www.npmjs.com/package/@babel/preset-react
  jsxPragmaFrag: null,

  // Transpilation Settings: We default on a loose transpilation which is efficient
  // but not overly compliant. If you experience issues it might be better to
  // switch `looseMode` off. `specMode` on the other hand might produce
  // 100% correct code, but tend to be large and slower as well.
  loose: true,
  spec: false,

  // Configuration for module lookup
  sourceFolder: './src',

  // Enable full compression on production scripts or basic compression for libraries or during development.
  minified: false,

  // Whether to enable source map output
  sourceMaps: true
};
