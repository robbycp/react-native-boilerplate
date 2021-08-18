import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList, ScreenName} from '~/types/navigation';

export interface ListFeature {
  title: string;
  icon: string;
  onPress: () => void;
}

type ScreenHomeNavigation = NativeStackScreenProps<
  RootStackParamList,
  ScreenName.WEBVIEW_GOOGLE
>;
export interface ScreenHomeContainerProps extends ScreenHomeNavigation {}
export interface ScreenHomeViewProps {
  handleShareMessage: () => void;
  isShowFocus: boolean;
  listFeatures: ListFeature[];
  navigation: ScreenHomeNavigation['navigation'];
  setisShowFocus: React.Dispatch<React.SetStateAction<boolean>>;
  textFirebaseConfig: RemoteConfigValue;
}
