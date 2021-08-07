import React from 'react';
import PropTypes from 'prop-types';
import YoutubePlayer from 'react-native-youtube-iframe';
import {View} from 'react-native';
import {YoutubePlayerViewProps} from './YoutubePlayerTypes';

function YoutubePlayerView({
  handleChangeIsVideoPlayed,
  isVideoPlayed,
  style,
  width,
  ...otherProps
}: YoutubePlayerViewProps) {
  const usedHeight = (9 / 16) * width;
  return (
    <View style={style}>
      <YoutubePlayer
        onChangeState={handleChangeIsVideoPlayed}
        play={isVideoPlayed}
        height={usedHeight}
        width={width}
        {...otherProps}
      />
    </View>
  );
}

YoutubePlayerView.defaultProps = {
  style: {},
};

YoutubePlayerView.propTypes = {
  handleChangeIsVideoPlayed: PropTypes.func.isRequired,
  isVideoPlayed: PropTypes.bool.isRequired,
  style: PropTypes.shape({}),
  width: PropTypes.number.isRequired,
};

export default YoutubePlayerView;
