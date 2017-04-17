export default (text) => (
    fetch(`http://app.nhodalat.com/search.php?key=${text}`)// eslint-disable-line
    .then(res => res.json())
);
