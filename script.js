let newItemButton = document.getElementById("btnAdd");
let inputTitle = document.getElementById("userinputtitle");
let inputDescription = document.getElementById("userinputdescriptions");
let ul = document.querySelector("ul");

// All created ToDo
let toDoList = [];

// create New Todo object
class Todo {
  constructor(title, description) {
    this.title = inputTitle.value;
    this.description = inputDescription.value;
  }
}

function inputTitleLength() {
  return inputTitle.value.length;
}

function inputDescriptionLength() {
  return inputDescription.value.length;
}

// create New List element

function createListElement() {
  let li = document.createElement("li");
  ul.appendChild(li);

  let firstRowDiv = document.createElement("div");
  firstRowDiv.className = 'row';
  li.appendChild(firstRowDiv);

  let checkColDiv = document.createElement("div");
  checkColDiv.className = "col col-md-auto";
  firstRowDiv.appendChild(checkColDiv);

  let check = document.createElement("input");
  check.setAttribute("type", "checkbox");
  // check.className = "titleToggle";
  checkColDiv.appendChild(check);

  let titleColDiv = document.createElement("div");
	titleColDiv.className = "col col-md-auto";
  firstRowDiv.appendChild(titleColDiv);

  let titleText = document.createElement("h4");
	titleText.className = "title";
  titleText.textContent = inputTitle.value;
  inputTitle.value = "";
  titleColDiv.appendChild(titleText);

  let dateColDiv = document.createElement("div");
  dateColDiv.className = "col text-end";
  firstRowDiv.appendChild(dateColDiv);

  let secondRowDiv = document.createElement("div");
  secondRowDiv.className = 'row';
  li.appendChild(secondRowDiv);

  let descrColDiv = document.createElement("div");
  descrColDiv.className = "col";
  secondRowDiv.appendChild(descrColDiv);

  let descrText = document.createElement("p");
  descrText.textContent = inputDescription.value;
  inputDescription.value = "";
  descrColDiv.appendChild(descrText);

  let btnColDiv = document.createElement("div");
  btnColDiv.className = "col text-end col-md-auto";
  secondRowDiv.appendChild(btnColDiv);

  let editBtn = document.createElement("button");
  editBtn.setAttribute("type", "button");
  editBtn.setAttribute("data-bs-toggle", "modal");
  editBtn.setAttribute("data-bs-target", "#editModal");
  editBtn.className = "btn btn-primary editButton";
  editBtn.appendChild(document.createTextNode("Edit"));
  btnColDiv.appendChild(editBtn);

}

function addAfterClick() {
  if (inputTitleLength() > 0 && inputDescriptionLength() > 0) {
    let todo = new Todo();
    toDoList.push(todo);
    createListElement();
		// for all edit buttons its display text content from last input
		editTitle.textContent = todo.title;
		editDescription.textContent = todo.description;

  }
}

function addAfterKeypress(event) {
  if (inputTitleLength() > 0 && inputDescriptionLength() > 0 && event.keyCode === 13) {
    let todo = new Todo();
    toDoList.push(todo);
    createListElement();

  }
}

//   edit input value  I am stuck on editing functionality
// let editBtnList = document.querySelectorAll(".editButton");
// for (let i=0; i<editBtnList.length; i++){
// 	editBtnList[i].addEventListener("click", function(e){
// 		console.log( );
//
// 	});
// }


newItemButton.addEventListener("click",addAfterClick);

inputDescription.addEventListener("keypress", addAfterKeypress);
