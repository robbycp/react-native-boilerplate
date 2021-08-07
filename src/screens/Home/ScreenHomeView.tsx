import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import {Button, List, Subheading, Text, Title} from 'react-native-paper';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import YoutubePlayer from '~/components/basic/YoutubePlayer';
import {deviceWidth} from '~/utils/calculationView';
import {ScreenHomeViewProps} from './ScreenHomeTypes';

const marginVideoPlayer = 16;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  videoPlayer: {
    margin: marginVideoPlayer,
    width: deviceWidth,
  },
});

const ScreenHomeView = ({
  handleShareMessage,
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
        <View style={styles.container}>
          <Title>Functional Features</Title>
          <Subheading>Remote Config</Subheading>
          <Text>Firebase Remote Config : {textFirebaseConfig.value}</Text>
          <Subheading>Share link</Subheading>
          <Button onPress={handleShareMessage}>Share Message</Button>
          <Subheading>Youtube Player</Subheading>
          <YoutubePlayer
            style={styles.videoPlayer}
            videoId="iee2TATGMyI"
            width={deviceWidth - 2 * marginVideoPlayer}
          />
          <Title>Other Features</Title>
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
