import buildPreset from '~';

import { check, fixtures, titles } from './utils';

describe('Target: Universal', () => {
  const options = buildPreset(null, {
    sourceMaps: false
  });

  fixtures.forEach((fileName, index) => {
    test(titles[index], () => check(fileName, options));
  });
});
