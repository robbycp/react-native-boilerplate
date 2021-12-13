import React from 'react';
import FastImage, {FastImageProps, Source} from 'react-native-fast-image';

import EmptyImage from '~/assets/images/empty-image.png';

type FastImageCustomProps = FastImageProps & {
  source: Source;
};

const FastImageCustom = ({source, ...otherProps}: FastImageCustomProps) => {
  const image = source.uri ? source : EmptyImage;
  const [loadedImageUrl, setloadedImageUrl] = React.useState(image);
  return (
    <FastImage
      {...otherProps}
      source={loadedImageUrl}
      onError={() => {
        setloadedImageUrl(EmptyImage);
      }}
      resizeMode={FastImage.resizeMode.contain}
    />
  );
};

export default FastImageCustom;
