import Model from '~/services/firebaseFirestore';
import {ClientData} from '~/types/user';

const Users = new Model<ClientData>('User', {
  id: '',
  displayName: '',
  email: '',
  username: '',
  photoURL: '',
});

export default Users;
