const url = 'http://app.nhodalat.com/dangki.php';
const getOption = (email, password, name) => ({
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password, name })
});

const signUp = (email, password, name) => (
    fetch(url, getOption(email, password, name)) // eslint-disable-line
    .then(res => res.text())
);

export default signUp;
