const feedbackElem = document.querySelector('.feedback')
const textInputElement = document.getElementById('addReg');
const addBtn = document.getElementById('addRegBtn');
const resetBtn = document.getElementById('resetBtn');
const showBtn = document.getElementById('showBtn');
const showAllBtn = document.getElementById('showAllBtn');
const regList = document.getElementById('regList');

let reg = regFunctions();
var regKeys = [];
const regEx = /[/.,?><';":{}+_)(*&^%$#@!=-`~]/;

function createList() {
  regKeys = Object.keys(JSON.parse(localStorage.getItem("registration")));
  for (var i = 0; i < regKeys.length; i++) {
    regList.innerHTML += '<li class="regListItem">' + regKeys[i] + "</li>";
  }
}

addBtn.addEventListener('click', () => {
  if ((textInputElement.value.startsWith('ca')) || (textInputElement.value.startsWith('cy')) || (textInputElement.value.startsWith('ck'))) {
    if (!regEx.test(textInputElement.value)) {
      reg.addButton(textInputElement.value.toLowerCase());
      localStorage.setItem("registration", JSON.stringify(reg.getRegList()));

      regList.innerHTML = "";
      createList();

      feedbackElem.style.color = "green";
      feedbackElem.innerHTML = "Registration number successfully added!"
      setTimeout(() => { feedbackElem.innerHTML = "" }, 5000);
      setTimeout(() => { feedbackElem.style.color = "black" }, 5000);
    } else {
      feedbackElem.style.color = "red";
      feedbackElem.innerHTML = "Invalid character detected!"
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
}
);


showBtn.addEventListener('click', () => {
  const checkedTown = document.querySelector("input[name='townFilter']:checked");

  regList.innerHTML = "";

  for (var i = 0; i < regKeys.length; i++) {
    if (regKeys[i].startsWith(checkedTown.value)) {
      regList.innerHTML += '<li class="regListItem">' + regKeys[i] + "</li>";
    }
  }
})

showAllBtn.addEventListener('click', () => {
  regList.innerHTML = "";
  createList();
})

document.body.onload = (() => {
  if (localStorage["registration"]) {
    reg.setRegList(JSON.parse(localStorage.getItem("registration")));
  }

  createList();
});

resetBtn.addEventListener('click', () => {
  localStorage.clear();
  location.reload();
});
