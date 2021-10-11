import React from 'react';
import {ScrollView} from 'react-native';
import {Button, useTheme} from 'react-native-paper';

import EmptyState from '~/components/basic/EmptyState';
import Html from '~/components/basic/HTML';
import LoadingContent from '~/components/basic/Loading/LoadingContent';

interface Props {
  content: string;
  dispatchClearTermsCondition: () => void;
  dispatchGetTermsCondition: () => void;
  isLoading: boolean;
}

const ScreenTermsConditionView = ({
  content,
  dispatchClearTermsCondition,
  dispatchGetTermsCondition,
  isLoading,
}: Props) => {
  const theme = useTheme();
  return (
    <ScrollView contentContainerStyle={theme.layout.fill}>
      <Button onPress={dispatchClearTermsCondition}>Clear content</Button>
      <LoadingContent isVisible={isLoading}>
        <EmptyState
          isVisible={!content}
          title="Sorry!"
          subtitle="There was a problem. Please Refresh"
          textButtonSubmit="Refresh"
          onSubmit={dispatchGetTermsCondition}>
          <Html source={{html: content}} />
        </EmptyState>
      </LoadingContent>
    </ScrollView>
  );
};

export default ScreenTermsConditionView;
