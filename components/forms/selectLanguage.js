import { getLanguages } from '../../api/languageData';
import renderToDOM from '../../utils/renderToDom';

const selectLanguage = (languageId) => {
  let domString = `<label for="language">Select an Author</label>
    <select class="form-control" id="language_id" required>
    <option value="">Select a Language</option>`;

  getLanguages().then((languagesArray) => {
    languagesArray.forEach((language) => {
      domString += `
          <option 
            value="${language.firebaseKey}" 
            ${languageId === language.firebaseKey ? 'selected' : ''}>
              ${language.first_name} ${language.last_name}
          </option>`;
    });

    domString += '</select>';

    renderToDOM('#select-language', domString);
  });
};

export default selectLanguage;
