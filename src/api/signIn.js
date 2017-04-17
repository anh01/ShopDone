const url = 'http://app.nhodalat.com/dangnhap.php';
const getOption = (email, password) => ({
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
});

const signIn = (email, password) => (
    fetch(url, getOption(email, password)) // eslint-disable-line
    .then(res => res.json())
);

export default signIn;
