import React from 'react';

import ScreenFormView from './ScreenFormView';

const ScreenFormContainer: React.FunctionComponent = () => {
  const [formText, setFormText] = React.useState<string>('');
  return (
    <ScreenFormView
      {...{
        formText,
        setFormText,
      }}
    />
  );
};

export default ScreenFormContainer;
