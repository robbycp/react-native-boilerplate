import React from 'react';
import {ViewStyle} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

export type YoutubePlayerProps = Omit<
  React.ComponentProps<typeof YoutubePlayer>,
  'height'
> & {
  style: ViewStyle;
  width: number;
};

export interface YoutubePlayerViewProps extends YoutubePlayerProps {
  handleChangeIsVideoPlayed: (state: string) => void;
  isVideoPlayed: boolean;
}
