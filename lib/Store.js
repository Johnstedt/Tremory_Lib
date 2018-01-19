import { AsyncStorage} from 'react-native';


export async function addToStore(key, data){
  await AsyncStorage.setItem(key, data);
}

export async function getFromStore(key){
  return await AsyncStorage.getItem(key);
}
