import {resources} from '.';

// react-i18next versions higher than 11.11.0
declare module 'react-i18next' {
  // and extend them!
  interface CustomTypeOptions {
    // custom resources type
    resources: typeof resources['en'];
  }
}
