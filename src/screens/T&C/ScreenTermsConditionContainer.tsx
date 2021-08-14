import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '~/store/rootReducers';
import {commonClear, commonFetch} from '~/store/slices/common';
import {CommonData} from '~/types/common';

import ScreenTermsConditionView from './ScreenTermsConditionView';

const ScreenTermsConditionContainer = () => {
  const dispatch = useDispatch();

  const commonData = useSelector((state: RootState) => state.common);

  React.useEffect(() => {
    dispatch(commonFetch({key: CommonData.termsAndCondition}));
    return () => {
      dispatch(commonClear({key: CommonData.termsAndCondition}));
    };
  }, [dispatch]);
  return (
    <ScreenTermsConditionView
      {...{
        content: commonData[CommonData.termsAndCondition] || '',
        isLoading: commonData.isLoading,
      }}
    />
  );
};

export default ScreenTermsConditionContainer;
