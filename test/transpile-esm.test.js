import buildPreset from '~';

import { check, fixtures, titles } from './utils';

describe('Transpile: ESM', () => {
  const options = buildPreset(null, {
    sourceMaps: false,
    transpile: 'esm'
  });

  fixtures.forEach((fileName, index) => {
    test(titles[index], () => check(fileName, options));
  });
});
