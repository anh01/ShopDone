import { AsyncStorage } from 'react-native';

const saveToken = (token) => {
    AsyncStorage.setItem('@token', token);
};

export default saveToken;
