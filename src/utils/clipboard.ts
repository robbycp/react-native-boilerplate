import Clipboard from '@react-native-clipboard/clipboard';

export const copyToClipboard = (text: string) => {
  Clipboard.setString(text);
};

export const getTextClipboard = async () => {
  return await Clipboard.getString();
};
