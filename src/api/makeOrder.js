import { AsyncStorage } from 'react-native';

const url = 'http://app.nhodalat.com/cart.php';
const getOption = (token, arrayDetail) => ({
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ token, arrayDetail })
});

const order = async (arrayDetail) => {
    const token = await AsyncStorage.getItem('@token');
    fetch(url, getOption(token, arrayDetail))// eslint-disable-line
    .then(res => res.text());
};

export default order;
