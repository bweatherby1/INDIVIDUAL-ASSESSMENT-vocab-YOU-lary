import { showTerms } from '../pages/terms';
import { createTerm, updateTerm, getTerms } from '../api/termData';
import { createLanguage, updateLanguage, getLanguages } from '../api/languageData';
import { showLanguages } from '../pages/languages';

const formEvents = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-term')) {
      const payload = {
        term: document.querySelector('#term').value,
        defintion: document.querySelector('#definition').value,
        language_id: document.querySelector('#language_id').value,
      };
      createTerm(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateTerm(patchPayload).then(() => {
          getTerms().then(showTerms);
        });
      });
    }

    if (e.target.id.includes('update-term')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        term: document.querySelector('#term').value,
        defintion: document.querySelector('#definition').value,
        language_id: document.querySelector('#language_id').value,
        firebaseKey,
      };

      updateTerm(payload).then(() => {
        getTerms().then(showTerms);
      });
    }

    if (e.target.id.includes('submit-language')) {
      const payload = {
        name: document.querySelector('#name').value,
        origin: document.querySelector('#origin').value,
        history: document.querySelector('#history').value
      };

      createLanguage(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateLanguage(patchPayload).then(() => {
          getLanguages().then(showLanguages);
        });
      });
    }
    if (e.target.id.includes('update-language')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        name: document.querySelector('#name').value,
        origin: document.querySelector('#origin').value,
        history: document.querySelector('#history').value,
        firebaseKey,
      };

      updateLanguage(payload).then(() => {
        getLanguages().then(showLanguages);
      });
    }
  });
};

export default formEvents;
