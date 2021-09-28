export const useNetInfo = jest.fn(isOnline => ({
  isConnected: isOnline,
}));
