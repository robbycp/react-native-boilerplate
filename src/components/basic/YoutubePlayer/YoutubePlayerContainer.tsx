import React from 'react';
import {useIsFocused} from '@react-navigation/native';

import YoutubePlayerView from './YoutubePlayerView';
import {YoutubePlayerProps} from './YoutubePlayerTypes';

function YoutubePlayerContainer(props: YoutubePlayerProps) {
  const isFocused = useIsFocused();

  const [isVideoPlayed, setIsVideoPlayed] = React.useState(false);

  const handleChangeIsVideoPlayed = (state: string) => {
    if (state === 'playing') {
      setIsVideoPlayed(true);
    } else if (state === 'paused') {
      setIsVideoPlayed(false);
    }
  };

  React.useEffect(() => {
    if (!isFocused) {
      setIsVideoPlayed(isFocused);
    }
  }, [isFocused]);

  const newProps = {
    ...props,
    handleChangeIsVideoPlayed,
    isVideoPlayed,
  };
  return <YoutubePlayerView {...newProps} />;
}

export default YoutubePlayerContainer;
