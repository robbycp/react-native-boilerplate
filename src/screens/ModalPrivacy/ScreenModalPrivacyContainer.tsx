import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '~/store/rootReducers';
import {commonClear, commonFetch} from '~/store/slices/common';
import {CommonData} from '~/types/common';

import ScreenModalPrivacyView from './ScreenModalPrivacyView';

const ScreenModalPrivacyContainer = () => {
  const dispatch = useDispatch();

  const commonData = useSelector((state: RootState) => state.common);

  const dispatchGetTermsCondition = () => {
    dispatch(commonFetch({key: CommonData.privacyPolicy}));
  };
  const dispatchClearTermsCondition = () => {
    dispatch(commonClear({key: CommonData.privacyPolicy}));
  };
  React.useEffect(() => {
    dispatchGetTermsCondition();
    return () => {
      dispatchClearTermsCondition();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ScreenModalPrivacyView
      {...{
        content: commonData[CommonData.privacyPolicy] || '',
        isLoading: commonData.isLoading,
      }}
    />
  );
};

export default ScreenModalPrivacyContainer;
