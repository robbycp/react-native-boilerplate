import firestore from '@react-native-firebase/firestore';
import type {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';

export interface FirestoreData<T>
  extends Omit<FirebaseFirestoreTypes.DocumentSnapshot, 'data'> {
  data: () => T | undefined;
}
export default class FirestoreModel<
  T extends FirebaseFirestoreTypes.DocumentData,
> {
  public model: string;
  public data: T;

  constructor(modelName: string, data: T) {
    this.model = modelName;
    this.data = data;
    this.getDataById = this.getDataById.bind(this);
    this.createData = this.createData.bind(this);
    this.createDataById = this.createDataById.bind(this);
    this.updateData = this.updateData.bind(this);
    this.removeData = this.removeData.bind(this);
  }
  async getDataById(id: string) {
    try {
      const userData = (await firestore()
        .collection(this.model)
        .doc(id.trim())
        .get()) as FirestoreData<T>;
      return userData;
    } catch (error) {
      throw error;
    }
  }

  async createData(newData: Omit<T, 'id'>) {
    try {
      const createdData = await firestore().collection(this.model).add(newData);
      return createdData;
    } catch (error) {
      throw error;
    }
  }

  async createDataById(newData: T) {
    try {
      const {id, ...otherData} = newData;
      await firestore()
        .collection(this.model)
        .doc(id)
        .set(otherData, {merge: true});
      return newData;
    } catch (error) {
      throw error;
    }
  }

  async updateData(newData: T) {
    try {
      const {id, ...otherData} = newData;
      await firestore().collection(this.model).doc(id).update(otherData);
      return newData;
    } catch (error) {
      throw error;
    }
  }

  async removeData(id: string) {
    await firestore().collection(this.model).doc(id).delete();
  }
}
