import { getLanguages } from '../api/languageData';
import { getTerms } from '../api/termData';
import { showLanguages } from '../pages/languages';
import { showTerms } from '../pages/terms';

import { signOut } from '../utils/auth';

const navigationEvents = () => {
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  document.querySelector('#all-terms').addEventListener('click', () => {
    getTerms().then(showTerms);
  });

  document.querySelector('#languages').addEventListener('click', () => {
    getLanguages().then(showLanguages);
  });
};

export default navigationEvents;
