import refs from './refs';
import error from './pnotify';
import countries from '../templates/countries.hbs';

function updateMarkup(template, articles) {
  const markup = template(articles);
  refs.container.insertAdjacentHTML('beforeend', markup);
}

export default updateMarkup;
