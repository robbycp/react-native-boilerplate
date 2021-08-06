import React from 'react';
import {ScreenName} from '~/types/navigation';
import {ListFeature, ScreenHomeContainerProps} from './ScreenHomeTypes';

import ScreenHomeView from './ScreenHomeView';

const ScreenHomeContainer: React.FunctionComponent<ScreenHomeContainerProps> =
  ({navigation}) => {
    const listFeatures: ListFeature[] = [
      {
        title: 'Webview',
        icon: 'google',
        onPress: () => navigation.navigate(ScreenName.WEBVIEW_GOOGLE),
      },
    ];
    return (
      <ScreenHomeView
        {...{
          listFeatures,
        }}
      />
    );
  };

export default ScreenHomeContainer;
