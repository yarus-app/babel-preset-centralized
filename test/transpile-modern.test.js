import buildPreset from '~';

import { check, fixtures, titles } from './utils';

describe('Transpile: Modern', () => {
  const options = buildPreset(null, {
    sourceMaps: false,
    transpile: 'modern'
  });

  fixtures.forEach((fileName, index) => {
    test(titles[index], () => check(fileName, options));
  });
});
