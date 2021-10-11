import * as React from 'react';
import {useWindowDimensions} from 'react-native';
import {useTheme} from 'react-native-paper';
import {TabBar, TabView, SceneMap} from 'react-native-tab-view';

interface TabsProps {
  keysScene: Record<string, React.ComponentType<unknown>>;
}
export default function Tabs({keysScene}: TabsProps) {
  const layout = useWindowDimensions();
  const theme = useTheme();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
  ]);

  const renderScene = SceneMap(keysScene);

  const renderTabBar = props => {
    return (
      <TabBar
        {...props}
        indicatorStyle={{backgroundColor: theme.colors.accent}}
        style={{backgroundColor: theme.colors.primary}}
      />
    );
  };

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width, height: 0}}
    />
  );
}
