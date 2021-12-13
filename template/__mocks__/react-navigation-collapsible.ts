jest.mock('react-navigation-collapsible', () => ({
  CollapsibleSubHeaderAnimator: jest.fn(() => ({})),
  useCollapsibleHeader: jest.fn(() => ({})),
  useCollapsibleSubHeader: jest.fn(() => ({})),
}));
