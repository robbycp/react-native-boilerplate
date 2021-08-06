import React from 'react';

import Webview from '~/components/basic/Webview';

const WebviewGoogleContainer: React.FunctionComponent = () => {
  return <Webview source={{uri: 'https://google.com'}} />;
};

export default WebviewGoogleContainer;
