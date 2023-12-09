import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewLanguage = (obj) => {
  clearDom();

  const domString = `
  <div class=" text-white mt-5 d-flex flex-wrap">
   <div class="d-flex flex-column">
     <h1 >${obj.first_name} ${obj.last_name}</h1>
     language Email: <a href="mailto:${obj.email}">${obj.email}</a>
     <hr>
     <div class="mt-5">
       <i id="update-language-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info">Update</i>
       <i id="delete-language-btn--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt">Delete</i>
     </div>
   </div>
    </div>`;

  renderToDOM('#view', domString);
};

export default viewLanguage;
