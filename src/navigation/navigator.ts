import {
  CommonActions,
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';
import {RootStackParamList} from '~/types/navigation';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export function navigate(name: string, params?: object) {
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
export function replace(name: string, params?: object) {
  navigationRef.dispatch(StackActions.replace(name, params));
}
