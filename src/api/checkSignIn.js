import { AsyncStorage } from 'react-native';

const url = 'http://app.nhodalat.com/kiemtra_dangnhap.php';

const getOption = (token) => ({
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ token })
});

const checkAuthentication = async () => {
    const token = await AsyncStorage.getItem('@token');
    return fetch(url, getOption(token)) // eslint-disable-line
    .then(res => res.json());
};

export default checkAuthentication;
