import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyLanguages = () => {
  const domString = '<h1>No Languages</h1>';
  renderToDOM('#store', domString);
};

const showLanguages = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-language-btn">Add A Language</button>';

  renderToDOM('#add-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${item.first_name} ${item.last_name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${item.email}</h6>
        <hr>
        <i class="btn btn-success fas fa-eye" id="view-language-btn--${item.firebaseKey}">View</i>
        <i class="fas fa-edit btn btn-info" id="update-language--${item.firebaseKey}">Update</i>
        <i class="btn btn-danger fas fa-trash-alt" id="delete-language-btn--${item.firebaseKey}">Delete</i>
      </div>
    </div>
    `;
  });
  renderToDOM('#store', domString);
};

export { showLanguages, emptyLanguages };
