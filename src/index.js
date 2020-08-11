import './styles.css';
import countries from './js/fetchCountries';
import refs from './js/refs';
import debounce from 'lodash.debounce';
refs.input.addEventListener('input', debounce(fetchCountries, 800));
