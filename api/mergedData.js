import { getSingleTerm, deleteTerm } from './termData';
import { getSingleLanguage, deleteSingleLanguage, getLanguageTerms } from './languageData';

const getTermDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleTerm(firebaseKey).then((termObject) => {
    getSingleLanguage(termObject.language_id)
      .then((languageObject) => resolve({ ...termObject, languageObject }));
  }).catch(reject);
});

const deleteLanguageTermsRelationship = (firebaseKey) => new Promise((resolve, reject) => {
  getLanguageTerms(firebaseKey).then((languageTermsArray) => {
    const deleteTermPromises = languageTermsArray.map((term) => deleteTerm(term.firebaseKey));

    Promise.all(deleteTermPromises).then(() => {
      deleteSingleLanguage(firebaseKey).then(resolve);
    });
  }).catch(reject);
});

const getLanguageDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleLanguage(firebaseKey).then((languageObject) => {
    getLanguageTerms(firebaseKey).then((languageTerms) => resolve({ ...languageTerms, languageObject }));
  }).catch(reject);
});

export { getTermDetails, deleteLanguageTermsRelationship, getLanguageDetails };
