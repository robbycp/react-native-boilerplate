import React from 'react';
import RenderHtml, {HTMLSource} from 'react-native-render-html';
import {useWindowDimensions} from 'react-native';

type RenderHtmlProps = React.ComponentProps<typeof RenderHtml>;
interface Props extends RenderHtmlProps {
  source: HTMLSource;
}

const Html = ({source}: Props) => {
  const {width} = useWindowDimensions();
  return <RenderHtml contentWidth={width} source={source} />;
};

export default Html;
