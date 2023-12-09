import {
  getLanguages,
  getSingleLanguage
} from '../api/languageData';
import { getTerms, deleteTerm, getSingleTerm } from '../api/termData';
import { showLanguages } from '../pages/languages';
import { showTerms } from '../pages/terms';
import addTermForm from '../components/forms/addTermForm';
import addLanguageForm from '../components/forms/addLanguageForm';
import { deleteLanguageTermsRelationship, getTermDetails } from '../api/mergedData';
import viewTerm from '../pages/viewTerm';
import viewLanguage from '../pages/viewLanguage';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // TODO: CLICK EVENT FOR DELETING A BOOK
    if (e.target.id.includes('delete-term')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE Term', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');
        deleteTerm(firebaseKey).then(() => {
          getTerms().then(showTerms);
        });
      }
    }

    // TODO: CLICK EVENT FOR SHOWING FORM FOR ADDING A BOOK
    if (e.target.id.includes('add-term-btn')) {
      addTermForm();
    }

    // TODO: CLICK EVENT EDITING/UPDATING A BOOK
    if (e.target.id.includes('edit-term-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleTerm(firebaseKey).then((termObj) => addTermForm(termObj));
    }
    // TODO: CLICK EVENT FOR VIEW BOOK DETAILS
    if (e.target.id.includes('view-term-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getTermDetails(firebaseKey).then(viewTerm);
    }

    // FIXME: ADD CLICK EVENT FOR DELETING AN AUTHOR
    if (e.target.id.includes('delete-language-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteLanguageTermsRelationship(firebaseKey).then(() => {
          getLanguages().then(showLanguages);
        });
      }
    }

    if (e.target.id.includes('add-language-btn')) {
      addLanguageForm();
    }

    if (e.target.id.includes('update-language')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleLanguage(firebaseKey).then((languageObj) => addLanguageForm(languageObj));
    }
    if (e.target.id.includes('view-language-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleLanguage(firebaseKey).then(viewLanguage);
    }
  });
};

export default domEvents;
