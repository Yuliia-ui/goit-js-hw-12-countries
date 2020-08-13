import refs from './refs';
import errorMessage from './pnotify';
import country from '../templates/countries.hbs';
import listCountries from '../templates/list.hbs';

function updateCountriesMarkup(data) {
  if (data.length > 10) {
    errorMessage();
    return;
  }

  let markup;
  if (data.length === 1) {
    markup = country(data);
  }
  if (data.length >= 2 && data.length <= 10) {
    markup=listCountries(data);
  }

  refs.container.insertAdjacentHTML('beforeend', markup);
}

export default updateCountriesMarkup;
