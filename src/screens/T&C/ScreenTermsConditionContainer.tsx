import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '~/store/rootReducers';
import {commonClear, commonFetch} from '~/store/slices/common';
import {CommonData} from '~/types/common';

import ScreenTermsConditionView from './ScreenTermsConditionView';

const ScreenTermsConditionContainer = () => {
  const dispatch = useDispatch();

  const commonData = useSelector((state: RootState) => state.common);

  const dispatchGetTermsCondition = React.useCallback(() => {
    dispatch(commonFetch({key: CommonData.termsAndCondition}));
  }, [dispatch]);
  const dispatchClearTermsCondition = React.useCallback(() => {
    dispatch(commonClear({key: CommonData.termsAndCondition}));
  }, [dispatch]);
  React.useEffect(() => {
    dispatchGetTermsCondition();
    return () => {
      dispatchClearTermsCondition();
    };
  }, [dispatchClearTermsCondition, dispatchGetTermsCondition]);
  return (
    <ScreenTermsConditionView
      {...{
        dispatchClearTermsCondition,
        dispatchGetTermsCondition,
        content: commonData[CommonData.termsAndCondition] || '',
        isLoading: commonData.isLoading,
      }}
    />
  );
};

export default ScreenTermsConditionContainer;
