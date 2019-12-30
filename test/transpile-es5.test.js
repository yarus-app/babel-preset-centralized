import buildPreset from '~';

import { check, fixtures, titles } from './utils';

describe('Transpile: ES5', () => {
  const options = buildPreset(null, {
    sourceMaps: false,
    transpile: 'es5'
  });

  fixtures.forEach((fileName, index) => {
    test(titles[index], () => check(fileName, options));
  });
});
