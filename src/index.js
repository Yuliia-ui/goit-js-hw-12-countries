import './styles.css';
import debounce from 'lodash.debounce';
import fetchCountries from './js/fetchCountries';
import markup from './js/markup';
import refs from './js/refs';
import './js/pnotify';

const debounceInputHandler = debounce(event => {
  const inputValue = event.target.value;
  refs.container.innerHTML = '';
  if (!inputValue) {
    return;
  }
  fetchCountries(inputValue).then(markup);
}, 500);

refs.input.addEventListener('input', debounceInputHandler);
