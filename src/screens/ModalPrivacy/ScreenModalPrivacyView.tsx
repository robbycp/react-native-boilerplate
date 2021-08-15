import React from 'react';
import {ScrollView} from 'react-native';
import HeaderModal from '~/components/basic/Header/HeaderModal';
import Html from '~/components/basic/HTML';
import LoadingContent from '~/components/basic/Loading/LoadingContent';

interface Props {
  content: string;
  isLoading: boolean;
}

const ScreenModalPrivacyView = ({content, isLoading}: Props) => {
  return (
    <>
      <HeaderModal title="Privacy" withBackButton={false} />
      <ScrollView>
        <LoadingContent isVisible={isLoading}>
          <Html source={{html: content}} />
        </LoadingContent>
      </ScrollView>
    </>
  );
};

export default ScreenModalPrivacyView;