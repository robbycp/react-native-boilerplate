import type {FirebaseAuthTypes} from '@react-native-firebase/auth';

export enum AuthMethod {
  GOOGLE = 'google',
}
export interface Auth {
  id: string;
  credential: string;
  email: string;
}
export interface ClientData {
  id: string;
  displayName: string | null | undefined;
  email: string | null | undefined;
  photoURL: string | null | undefined;
  username: string | null | undefined;
}

export type FirebaseUserCredential = FirebaseAuthTypes.UserCredential;
