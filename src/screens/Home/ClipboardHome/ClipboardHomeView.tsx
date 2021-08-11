import React from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-paper';

import {copyToClipboard, getTextClipboard} from '~/utils/clipboard';

const ClipboardHomeView = () => {
  const [copiedText, setCopiedText] = React.useState('');

  const handleCopyClipboard = () => {
    const randomNumber = Math.random();
    copyToClipboard(`hello world ${randomNumber}`);
  };

  const fetchCopiedText = async () => {
    const text = await getTextClipboard();
    setCopiedText(text);
  };
  return (
    <View>
      <View>
        <Button onPress={handleCopyClipboard}>
          Click here to copy to Clipboard
        </Button>
        <Button onPress={fetchCopiedText}>
          <Text>View copied text</Text>
        </Button>
      </View>
      <Text>{copiedText}</Text>
    </View>
  );
};

export default ClipboardHomeView;
