import React from 'react';
import {ScrollView} from 'react-native';
import Html from '~/components/basic/HTML';
import LoadingContent from '~/components/basic/Loading/LoadingContent';

interface Props {
  content: string;
  isLoading: boolean;
}

const ScreenModalPrivacyView = ({content, isLoading}: Props) => {
  return (
    <ScrollView>
      <LoadingContent isVisible={isLoading}>
        <Html source={{html: content}} />
      </LoadingContent>
    </ScrollView>
  );
};

export default ScreenModalPrivacyView;
