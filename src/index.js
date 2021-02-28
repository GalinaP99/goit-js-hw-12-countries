import './styles.css';

import updateCountriesMarkup from './js/update-countries-markup.js';
import fetchCoutries from './js/fetch-countries.js';
import debounce from 'lodash.debounce';

const refs = {
    countriesContainer: document.querySelector('#markup'),
    searchForm: document.querySelector('#country-input')
};
refs.searchForm.addEventListener('input', debounce(searchInputHandler, 500));

function searchInputHandler(event) {
event.preventDefault();
    //const input = event.currentTarget;
    const inputValue = event.target.value;
   // const inputValue = input.elements.query.value;
    //console.log(inputValue);
    clearCountriesContainer();
   // input.reset();
    fetchCoutries(inputValue).
        then(updateCountriesMarkup)
        /*.catch(error => {
            return;
        });*/
};

function clearCountriesContainer() {
 refs.countriesContainer.innerHTML = '';
}
