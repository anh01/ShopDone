import { AsyncStorage } from 'react-native';

const url = 'http://app.nhodalat.com/order_history.php';
const getOption = (token) => ({
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ token })
});

const requestChangeInfo = (option) => (
    fetch(url, option) // eslint-disable-line
    .then(res => res.json())
);

const getListOrder = async () => {
    try {
        const token = await AsyncStorage.getItem('@token');
        const option = getOption(token);
        const listOrder = await requestChangeInfo(option);
        return Promise.resolve(listOrder);
    } catch (e) {
        return Promise.reject(e);
    }
};

export default getListOrder;
