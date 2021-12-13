import React from 'react';
import {View} from 'react-native';

import PickerList from '~/components/basic/Form/PickerList';
import i18n from '~/translations';

const listLanguage = [
  {id: '1', title: 'English (en)', value: 'en'},
  {id: '2', title: 'Indonesia (id)', value: 'id'},
];
const LanguageOptionView = () => {
  const [language, setlanguage] = React.useState(listLanguage[0]);
  React.useEffect(() => {
    i18n.changeLanguage(language.value);
  }, [language]);
  return (
    <View>
      <PickerList
        label="Language"
        onChange={val => setlanguage(val)}
        list={listLanguage}
        value={language}
      />
    </View>
  );
};

export default LanguageOptionView;
