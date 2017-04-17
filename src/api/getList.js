export default (idList, idPage) => {
    const urlList = `http://app.nhodalat.com/sp_by_type.php?id_type=${idList}&page=${idPage}`;
    const urlCategory = `http://app.nhodalat.com/get_collection.php?page=${idPage}`;
    const url = idList === 0 ? urlCategory : urlList;
    return fetch(url)// eslint-disable-line
    .then(res => res.json());
};
