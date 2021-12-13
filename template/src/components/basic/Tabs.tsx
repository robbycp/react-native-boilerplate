import * as React from 'react';
import {useWindowDimensions} from 'react-native';
import {useTheme} from 'react-native-paper';
import {TabBar, TabView, SceneMap} from 'react-native-tab-view';

export interface TabConfig {
  key: string;
  title: string;
  scene: React.ComponentType<unknown>;
}
interface TabsProps {
  tabs: TabConfig[];
}
export default function Tabs({tabs}: TabsProps) {
  const layout = useWindowDimensions();
  const theme = useTheme();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState(tabs);

  const renderScene = SceneMap(
    tabs.reduce((prev, cur) => {
      prev[cur.key] = cur.scene;
      return prev;
    }, {} as {[key: string]: React.ComponentType<unknown>}),
  );

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      renderTabBar={props => (
        <TabBar
          {...props}
          indicatorStyle={{backgroundColor: theme.colors.accent}}
          style={{backgroundColor: theme.colors.primary}}
        />
      )}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width, height: 0}}
    />
  );
}
