import linking from '../linking';

describe('linking: ', () => {
  test('should have this value', () => {
    expect(linking.prefixes).toStrictEqual(['https://sibudi.id', 'sibudi://']);
    expect(linking.config?.initialRouteName).toBe('Splash');
    expect(linking.config?.screens).toStrictEqual({
      Form: 'form',
    });
  });
});
