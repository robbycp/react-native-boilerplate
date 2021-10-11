import React from 'react';
import HTML from '~/components/basic/HTML';

const HTMLHomeView = () => {
  const source = {
    html: `
  <p style='text-align:center;'>
    Hello World!
  </p>`,
  };
  return <HTML source={source} />;
};

export default HTMLHomeView;
