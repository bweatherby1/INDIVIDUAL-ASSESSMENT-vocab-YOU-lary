import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';
import selectLanguage from './selectLanguage';

const addTermForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-term--${obj.firebaseKey}` : 'submit-term'}" class="mb-4">
      <div class="form-group">
        <label for="title">Term</label>
        <input type="text" class="form-control" id="title" aria-describedby="termTitle" placeholder="New Term" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="description">Definition</label>
        <textarea class="form-control" placeholder="Term Definition" id="description" style="height: 100px">${obj.description || ''}</textarea>
      </div>
      <div class="form-group" id="select-language">
      </div>
      <button type="submit" class="btn btn-primary">Submit Term
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
  selectLanguage(`${obj.language_id || ''}`);
};

export default addTermForm;
