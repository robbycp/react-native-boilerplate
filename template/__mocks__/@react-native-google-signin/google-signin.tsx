import React from 'react';

export const GoogleSignin = {
  configure: () => ({}),
  signIn: () => ({}),
};

export class GoogleSigninButton extends React.Component {
  static get Size() {
    return {
      Wide: 'wide',
    };
  }
  static get Color() {
    return {
      Dark: 'dark',
    };
  }
  render() {
    return <></>;
  }
}
