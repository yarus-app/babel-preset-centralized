import buildPreset from '~';

import { check, fixtures, titles } from './utils';

describe('Target: Browser: Prod', () => {
  const options = buildPreset(null, {
    sourceMaps: false,
    target: 'browser',
    env: 'production'
  });

  fixtures.forEach((fileName, index) => {
    test(titles[index], () => check(fileName, options));
  });
});
