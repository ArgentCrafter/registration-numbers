const feedbackElem = document.querySelector('.feedback')
const textInputElement = document.getElementById('addReg');
const addBtn = document.getElementById('addRegBtn');
const resetBtn = document.getElementById('resetBtn');
const showBtn = document.getElementById('showBtn');
const showAllBtn = document.getElementById('showAllBtn');
const regList = document.getElementById('regList');

let reg = regFunctions();
var regKeys = [];

const regEx = /(^[a-z]{2}\s\d{5}$)|(^[a-z]{2}\s\d{3}-\d{2}$)/i;

function createList() {
  regKeys = Object.keys(JSON.parse(localStorage.getItem("registration")));
  for (var i = 0; i < regKeys.length; i++) {
    regList.innerHTML += '<li class="regListItem">' + regKeys[i] + "</li>";
  }
}

document.body.onload = (() => {
  if (localStorage["registration"]) {
    reg.setRegList(JSON.parse(localStorage.getItem("registration")));
  }

  createList();
});

addBtn.addEventListener('click', () => {
  var gotRegList = reg.getRegList();
  var regListKeys = Object.keys(gotRegList);
  var flagRegFound = false;

  console.log(regListKeys);

  for (var i = 0; i < regListKeys.length; i++) {
    if (regListKeys[i] === textInputElement.value) {
      flagRegFound = true;
    }
  }
  if (flagRegFound === false) {
    if (reg.checkRegNum(textInputElement.value.toLowerCase())) {
      if (regEx.test(textInputElement.value)) {
        reg.addButton(textInputElement.value.toLowerCase());
        localStorage.setItem("registration", JSON.stringify(gotRegList));
        regList.innerHTML = "";
        createList();

        feedbackElem.style.color = "green";
        feedbackElem.innerHTML = "Registration number successfully added!"
        setTimeout(() => { feedbackElem.innerHTML = "" }, 5000);
        setTimeout(() => { feedbackElem.style.color = "black" }, 5000);
      } else {
        feedbackElem.style.color = "red";
        feedbackElem.innerHTML = "Invalid input format"
        setTimeout(() => { feedbackElem.innerHTML = "" }, 5000);
        setTimeout(() => { feedbackElem.style.color = "black" }, 5000);
      }
    } else if (textInputElement.value === "") {
      feedbackElem.style.color = "red";
      feedbackElem.innerHTML = "No characters detected!"
      setTimeout(() => { feedbackElem.innerHTML = "" }, 5000);
      setTimeout(() => { feedbackElem.style.color = "black" }, 5000);
    } else {
      feedbackElem.style.color = "red";
      feedbackElem.innerHTML = "Please enter a license plate belonging to either Bellville, Cape Town or Malmesbury"
      setTimeout(() => { feedbackElem.innerHTML = "" }, 5000);
      setTimeout(() => { feedbackElem.style.color = "black" }, 5000);
    }
  } else {
    feedbackElem.style.color = "red";
    feedbackElem.innerHTML = "Registration number has already been registered"
    setTimeout(() => { feedbackElem.innerHTML = "" }, 5000);
    setTimeout(() => { feedbackElem.style.color = "black" }, 5000);
  }

  textInputElement.value = "";
});

showBtn.addEventListener('click', () => {
  const checkedTown = document.querySelector("input[name='townFilter']:checked");

  if (checkedTown) {
    regList.innerHTML = "";
    for (var i = 0; i < regKeys.length; i++) {
      if (regKeys[i].startsWith(checkedTown.value)) {
        regList.innerHTML += '<li class="regListItem">' + regKeys[i] + "</li>";
      }
    }
  } else {
    feedbackElem.style.color = "red";
    feedbackElem.innerHTML = "Please select a town"
    setTimeout(() => { feedbackElem.innerHTML = "" }, 5000);
    setTimeout(() => { feedbackElem.style.color = "black" }, 5000);
  }

  if (regList.innerHTML === "") {
    feedbackElem.style.color = "red";
    feedbackElem.innerHTML = "No registration numbers stored for this town"
    setTimeout(() => { feedbackElem.innerHTML = "" }, 5000);
    setTimeout(() => { feedbackElem.style.color = "black" }, 5000);

    createList();
  }
})

showAllBtn.addEventListener('click', () => {
  regList.innerHTML = "";

  createList();
})

resetBtn.addEventListener('click', () => {
  localStorage.clear();
  location.reload();
});