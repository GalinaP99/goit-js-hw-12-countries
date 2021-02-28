/*function fetchCoutries(country) {
    const url = `https://restcountries.eu/v2/name/${country}`;
    return fetch(url)
        .then(res => res.json())
        .then({ country })
     .catch(console.log);
    
}*/
function fetchCoutries(searchQuery) {
    const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;

    
   return fetch(url)
        .then(res => res.json())
      // .then(data => //updateCountriesMrkup(data)//{//({ countries }) => {
            console.log(data.length)
            // }); )
};
export default fetchCoutries;
