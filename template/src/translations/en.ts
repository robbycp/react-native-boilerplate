const privacy = 'Privacy';
const image = 'Image';

const en = {
  translation: {
    common: {
      dismiss: 'Dismiss',
      image,
      privacy,
      loading: 'Loading',
    },
    errorMessage: {
      fatal: {
        message:
          'We already receive the error message. Please restart our apps',
        title: 'Something went wrong',
      },
    },
    flatlistImage: {
      description: 'Use this screen as a performance playground',
      fastImage: 'Fast Image',
    },
    home: {
      authentication: 'Authentication',
      config: 'Config Environment',
      error: 'Error Sentry',
      errorSendJS: 'Send Error JS',
      errorSendNative: 'Send Error Native',
      functionalFocus: 'Functional Focus',
      functionalFeatures: 'Functional Features',
      firebaseRemoteConfig: 'Firebase Remote Config',
      modalPrivacy: `Modal ${privacy}`,
      otherFeature: 'Other Features',
      performance: 'Performance',
      privacy,
      networkRead: 'Network Read',
      selectLanguage: 'Select Language',
      shareLink: 'Share Link',
      shareButton: 'Share Message',
      version: 'Version',
      whatsappButton: 'Send text to whatsapp',
    },
    homeClipboard: {
      clickToCopy: 'Click here to copy to Clipboard',
      viewCopiedText: 'View copied text',
      copiedText: 'Hello world copy',
    },
    homeNetwork: {
      connected: 'Connected',
      noConnection: 'No Connection',
    },
  },
};

export type Translation = typeof en;

export default en;
