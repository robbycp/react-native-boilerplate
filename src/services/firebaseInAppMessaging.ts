import inAppMessaging from '@react-native-firebase/in-app-messaging';

export async function setInAppMessaging(isSet: boolean) {
  await inAppMessaging().setMessagesDisplaySuppressed(isSet);
}
