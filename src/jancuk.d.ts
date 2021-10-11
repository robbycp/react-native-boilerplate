declare module 'react-native-performance-monitor/provider' {
  export default function (
    Component: () => JSX.Element,
    screenName: string,
    ipAddress: string,
  ): () => JSX.Element;
}
