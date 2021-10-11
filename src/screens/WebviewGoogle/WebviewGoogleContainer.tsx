import React from 'react';

import Webview from '~/components/basic/Webview';

const WebviewGoogleContainer: React.FunctionComponent = () => {
  return <Webview titleHeader="Google" source={{uri: 'https://google.com'}} />;
};

export default WebviewGoogleContainer;
