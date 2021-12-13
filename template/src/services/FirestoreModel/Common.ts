import Model from '~/services/firebaseFirestore';

const Common = new Model<{content: string}>('Common', {
  content: '',
});

export default Common;
