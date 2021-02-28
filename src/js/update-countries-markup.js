import countriesTml from '../templates/countries.hbs';
import countryTml from '../templates/country.hbs';
import notification from './notifications';

const refs = {
    countriesContainer: document.querySelector('#markup')
};

function updateCountriesMarkup(countries) {
    if (countries.length === 1) {
 const markup = countryTml(countries);
        //console.log(markup);
        refs.countriesContainer.insertAdjacentHTML('beforeend', markup);
    }

    if (countries.length >= 2 && countries.length <= 10) {
 const markup = countriesTml(countries);
        refs.countriesContainer.insertAdjacentHTML('beforeend', markup);
    }

    if (countries.length > 10) {
        notification.myError();
    }
}

export default updateCountriesMarkup;