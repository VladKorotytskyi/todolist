const formEl = document.getElementById("ContactsForm");
const listEl = document.getElementById("ContactsList");

formEl.addEventListener('submit', handleSubmit);
function handleSubmit(evt){
}
function createContactMarkup(newContact){
    return `
<li>
    <p>${newContact.name}</p>
    <p>${newContact.number}</p>
</li>
`
};
function renderContacts(contacts){};
function getContactsFromLocalStorage(key){};


























































// const formEl = document.getElementById("taskForm");
// const inputEl = document.getElementById("taskInput");
// const listEl = document.getElementById("taskList");

// formEl.addEventListener("submit", (event) => {
//   event.preventDefault();
//   addTask(inputEl.value);
//   inputEl.value = "";
// });

// function addTask(text) {
//   const itemEl = document.createElement("li");

//   const checkboxEl = document.createElement("input");
//   checkboxEl.type = "checkbox";

//   const labelEl = document.createElement("span");
//   labelEl.textContent = text;

//   const deleteBtnEl = document.createElement("button");
//   deleteBtnEl.textContent = "Видалити";
//   deleteBtnEl.type = "button";

//   checkboxEl.addEventListener("change", () => {
//     if (checkboxEl.checked) {
//       labelEl.classList.add("completed");
//     } else {
//       labelEl.classList.remove("completed");
//     }
//   });

//   deleteBtnEl.addEventListener("click", () => {
//     itemEl.remove();
//   });

//   itemEl.appendChild(checkboxEl);
//   itemEl.appendChild(labelEl);
//   itemEl.appendChild(deleteBtnEl);
//   listEl.appendChild(itemEl);
// }
