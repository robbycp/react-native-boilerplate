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
    flatlistImage: {
      fastImage: 'Fast Image',
    },
    home: {
      authentication: 'Authentication',
      config: 'Config Environment',
      functionalFocus: 'Functional Focus',
      functionalFeatures: 'Functional Features',
      firebaseRemoteConfig: 'Firebase Remote Config',
      modalPrivacy: `Modal ${privacy}`,
      otherFeature: 'Other Features',
      privacy,
      networkRead: 'Network Read',
      selectLanguage: 'Select Language',
      shareLink: 'Share Link',
      shareButton: 'Share Message',
      version: 'Version',
      youtubePlayer: 'Youtube Player',
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
