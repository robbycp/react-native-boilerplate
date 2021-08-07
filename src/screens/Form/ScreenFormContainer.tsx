import React from 'react';

import ScreenFormView from './ScreenFormView';

const ScreenFormContainer: React.FunctionComponent = () => {
  const [formText, setFormText] = React.useState('');
  const [formDate, setFormDate] = React.useState(new Date());
  const [formTime, setFormTime] = React.useState(new Date());
  return (
    <ScreenFormView
      {...{
        formText,
        formDate,
        formTime,
        setFormText,
        setFormDate,
        setFormTime,
      }}
    />
  );
};

export default ScreenFormContainer;
