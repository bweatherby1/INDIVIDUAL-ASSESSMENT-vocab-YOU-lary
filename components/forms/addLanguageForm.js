import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addLanguageForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-language--${obj.firebaseKey}` : 'submit-language'}" class="mb-4">
      <div class="form-group">
        <label for="image">Language</label>
        <input type="text" class="form-control" id="name" placeholder="Name" value="${obj.name || ''}" required>
      </div>
      <div class="form-group">
        <label for="image">Country of origin</label>
        <input type="text" class="form-control" id="origin" placeholder="Where did it come from!?" value="${obj.origin || ''}" required>
      </div>
      <div class="form-group">
        <label for="title">History</label>
        <input type="history" class="form-control" id="history" aria-describedby="History" placeholder="History of language"${obj.definition || ''}"History" required>
      </div>
      <button type="submit" class="btn btn-primary mt-3">Submit Language</button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addLanguageForm;
