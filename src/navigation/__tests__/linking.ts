import {ScreenName} from '~/types/navigation';

import linking from '../linking';

describe('linking: ', () => {
  test('should have this value', () => {
    expect(linking.prefixes).toStrictEqual(['https://sibudi.id', 'sibudi://']);
    expect(linking.config?.initialRouteName).toBe(ScreenName.SPLASH);
    expect(linking.config?.screens).toStrictEqual({
      [ScreenName.ADS_LIST]: 'ads',
    });
  });
});
