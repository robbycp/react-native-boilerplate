import Config from 'react-native-config';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import type {FirebaseAuthTypes} from '@react-native-firebase/auth';

GoogleSignin.configure({
  webClientId: Config.GOOGLE_CLIENT_ID,
});

export function currentUser(): FirebaseAuthTypes.User | null {
  return auth().currentUser;
}

export async function signInGoogle(): Promise<FirebaseAuthTypes.UserCredential> {
  // Get the users ID token
  const {idToken} = await GoogleSignin.signIn();
  // console.info('[Google] idToken', idToken)

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  // console.info('[Google] googleCredential', googleCredential)

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}

export async function signOut() {
  try {
    await auth().signOut();
  } catch (error) {
    return error;
  }
}
