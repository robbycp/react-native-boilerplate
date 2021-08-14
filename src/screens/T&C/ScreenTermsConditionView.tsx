import React from 'react';
import {ScrollView} from 'react-native';
import Html from '~/components/basic/HTML';
import LoadingContent from '~/components/basic/LoadingContent';

interface Props {
  content: string;
}

const ScreenTermsConditionView = ({content}: Props) => {
  return (
    <ScrollView>
      <LoadingContent isVisible={!!content}>
        <Html source={{html: content}} />
      </LoadingContent>
    </ScrollView>
  );
};

export default ScreenTermsConditionView;
