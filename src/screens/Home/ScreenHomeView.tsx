import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';
import {List, Text} from 'react-native-paper';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {ScreenHomeViewProps} from './ScreenHomeTypes';

const ScreenHomeView = ({
  listFeatures,
  textFirebaseConfig,
}: ScreenHomeViewProps) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View>
          <Text>Firebase Remote Config : {textFirebaseConfig.value}</Text>
        </View>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          {listFeatures.map((item, position) => (
            <List.Item
              key={`${position}-${item.title}`}
              title={item.title}
              onPress={item.onPress}
              left={props => <List.Icon {...props} icon={item.icon} />}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ScreenHomeView;
