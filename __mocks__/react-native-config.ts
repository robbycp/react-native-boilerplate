jest.mock('react-native-config', () => ({
  API_URL: 'test',
  ENVIRONMENT: 'staging',

  // Third Party Apps

  // Firebase
  FIREBASE_REMOTE_CONFIG_CACHE_TIME: 0,
  // Google Signin
  GOOGLE_CLIENT_ID: 'test',
  GOOGLE_REVERSED_CLIENT_ID: 'test',
  // One Signal
  ONE_SIGNAL_ID: 'test',
  // Codepush
  CODEPUSH_DEPLOYMENT_IOS: 'test',
  CODEPUSH_DEPLOYMENT_ANDROID: 'test',
  // Sentry
  SENTRY_DSN: 'test',
  SENTRY_LOG_LEVEL: 'debug',
}));
