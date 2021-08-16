import React from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {useTranslation} from 'react-i18next';

import {copyToClipboard, getTextClipboard} from '~/utils/clipboard';

const ClipboardHomeView = () => {
  const {t} = useTranslation();
  const [copiedText, setCopiedText] = React.useState('');

  const handleCopyClipboard = () => {
    const randomNumber = Math.random();
    copyToClipboard(`${t('homeClipboard.copiedText')} ${randomNumber}`);
  };

  const fetchCopiedText = async () => {
    const text = await getTextClipboard();
    setCopiedText(text);
  };
  return (
    <View>
      <View>
        <Button onPress={handleCopyClipboard}>
          {t('homeClipboard.clickToCopy')}
        </Button>
        <Button onPress={fetchCopiedText}>
          <Text>{t('homeClipboard.viewCopiedText')}</Text>
        </Button>
      </View>
      <Text>{copiedText}</Text>
    </View>
  );
};

export default ClipboardHomeView;
