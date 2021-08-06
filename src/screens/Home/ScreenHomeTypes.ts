import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList, ScreenName} from '~/types/navigation';

export interface ListFeature {
  title: string;
  icon: string;
  onPress: () => void;
}
export interface ScreenHomeContainerProps
  extends NativeStackScreenProps<
    RootStackParamList,
    ScreenName.WEBVIEW_GOOGLE
  > {}
export interface ScreenHomeViewProps {
  listFeatures: ListFeature[];
}
