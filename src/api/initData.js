export default () => (
    fetch('http://app.nhodalat.com/')
    .then(res => res.json())
);
