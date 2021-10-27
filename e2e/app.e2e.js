const {device, cleanup, expect, element, by, waitFor} = require('detox');

describe('Authentication', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  afterAll(async () => {
    await cleanup();
  });

  it('should show splash screen then home screen', async () => {
    await expect(element(by.id('splashImageLogo'))).toBeVisible();
    await waitFor(element(by.id('environmentValue')))
      .toBeVisible()
      .withTimeout(20000);
    await expect(element(by.id('environmentValue'))).toBeVisible();
  });
});
