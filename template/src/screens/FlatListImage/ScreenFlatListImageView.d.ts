import withPerformanceMonitor from 'react-native-performance-monitor/provider';

declare module 'react-native-performance-monitor/provider' {
  export type PerformanceMonitor = ReturnType<typeof withPerformanceMonitor>;
}
