import React from 'react';
import {WebView, WebViewProps} from 'react-native-webview';
import Header from './Header/Header';

type RNWebviewProps = React.ComponentProps<typeof WebView>;
interface WebViewProps extends RNWebviewProps {
  titleHeader: string;
}
const Webview = (props: WebViewProps) => {
  const {titleHeader} = props;
  return (
    <>
      <Header title={titleHeader} />
      <WebView {...props} />
    </>
  );
};

export default Webview;
