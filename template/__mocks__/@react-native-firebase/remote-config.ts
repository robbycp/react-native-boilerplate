export default () => ({
  activate: jest.fn(() => ({})),
  fetch: jest.fn(() => ({})),
  getValue: jest.fn(() => ({
    getSource: jest.fn(() => 'test-source'),
    asString: jest.fn(() => 'string'),
    asNumber: jest.fn(() => 20),
    asBoolean: jest.fn(() => false),
  })),
  setDefaults: jest.fn(() => ({})),
});
