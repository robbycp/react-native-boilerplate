import React from 'react';
import {WebView} from 'react-native-webview';

type RNWebviewProps = React.ComponentProps<typeof WebView>;
interface WebViewProps extends RNWebviewProps {
  titleHeader: string;
}
const Webview = (props: WebViewProps) => {
  return <WebView {...props} />;
};

export default Webview;
