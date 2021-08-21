import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList, ScreenName} from '~/types/navigation';

export interface ListFeature {
  title: string;
  icon: string;
  onPress: () => void;
}

type ScreenHomeNavigation = StackScreenProps<
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
