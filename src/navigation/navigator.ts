import {
  CommonActions,
  createNavigationContainerRef,
  NavigationContainerRefWithCurrent,
  StackActions,
} from '@react-navigation/native';
import {RootStackParamList} from '~/types/navigation';

export const navigationRef =
  createNavigationContainerRef<
    NavigationContainerRefWithCurrent<RootStackParamList>
  >();

export function navigate(name: string, params?: object) {
  navigationRef.current?.dispatch(
    CommonActions.navigate({
      name,
      params,
    }),
  );
}
export function replace(name: string, params?: object) {
  navigationRef.current?.dispatch(StackActions.replace(name, params));
}
