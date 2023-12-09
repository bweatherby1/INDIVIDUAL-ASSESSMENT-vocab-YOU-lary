import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewTerm = (obj) => {
  clearDom();

  const domString = `
  <div class="mt-5 d-flex flex-wrap">
   <div class="d-flex flex-column">
   </div>
   <div class="text-white ms-5 details">
     <h5>${obj.term}</h5>
     <hr>
     <a>${obj.language_id}</a>
     <p>Definition:${obj.definition}</p>

     
     <div class="mt-5">
       <i id="edit-term-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info">Update</i>
       <i id="delete-term--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt">Delete</i>
     </div>     
      </div>
    </div>`;

  renderToDOM('#view', domString);
};

export default viewTerm;
