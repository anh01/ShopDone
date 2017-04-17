import { AsyncStorage } from 'react-native';

const url = 'http://app.nhodalat.com/change_info.php';
const getOption = (token, name, address, phone) => ({
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ token, name, address, phone })
});

const requestChangeInfo = (option) => (
    fetch(url, option) // eslint-disable-line
    .then(res => res.json())
);

const changeInfo = async (name, address, phone) => {
    try {
        const token = await AsyncStorage.getItem('@token');
        const option = getOption(token, name, address, phone);
        const user = await requestChangeInfo(option);
        return Promise.resolve(user);
    } catch (e) {
        return Promise.reject(e);
    }
};

export default changeInfo;
