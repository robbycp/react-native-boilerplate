import {
  CommonActions,
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';
import type {RootStackParamList} from '~/types/navigation';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export function navigate(name: keyof RootStackParamList, params?: object) {
  navigationRef.dispatch(
    CommonActions.navigate({
      name,
      params,
    }),
  );
}
export function popToTop() {
  navigationRef.dispatch(StackActions.popToTop());
}
export function replace(name: keyof RootStackParamList, params?: object) {
  navigationRef.dispatch(StackActions.replace(name, params));
}
