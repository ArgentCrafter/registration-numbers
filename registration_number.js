const feedbackElem = document.querySelector('.feedback');
const feedbackElem2 = document.querySelector('.feedback2');
const textInputElement = document.getElementById('addReg');
const textInputElement2 = document.getElementById('addReg2');
const addBtn = document.getElementById('addRegBtn');
const addBtn2 = document.getElementById('addRegBtn2');
const resetBtn = document.getElementById('resetBtn');
const resetBtn2 = document.getElementById('resetBtn2');
const showBtn = document.getElementById('showBtn');
const showBtn2 = document.getElementById('showBtn2');
const showAllBtn = document.getElementById('showAllBtn');
const showAllBtn2 = document.getElementById('showAllBtn2');
const regList = document.getElementById('regList');
const regList2 = document.getElementById('regList2');

let reg = regFunctions();
var regKeys = [];

const regEx = /(^[a-z]{2}\s\d{5}$)|(^[a-z]{2}\s\d{3}-\d{2}$)/i;

function createList() {
  regKeys = Object.keys(JSON.parse(localStorage.getItem("registration")));
  for (var i = 0; i < regKeys.length; i++) {
    regList.innerHTML += '<li class="regListItem">' + regKeys[i].toUpperCase() + "</li>";
  }
}

function createList2() {
  regKeys = Object.keys(JSON.parse(localStorage.getItem("registration2")));
  var capKeys = [];

  for (var i = 0; i < regKeys.length; i++) {
    capKeys[i] = regKeys[i].toUpperCase();
  }

  var templateSource = document.querySelector(".template").innerHTML;
  var template = Handlebars.compile(templateSource);
  var dataElem = document.getElementById("regList2");
  var dataHTML = template({ reg: capKeys });
  dataElem.innerHTML = dataHTML;
}

document.body.onload = (() => {
  if (localStorage["registration"]) {
    reg.setRegList(JSON.parse(localStorage.getItem("registration")));
  }

  createList();
  createList2();
});

addBtn.addEventListener('click', () => {
  var gotRegList = reg.getRegList();
  var regListKeys = Object.keys(gotRegList);
  var flagRegFound = false;

  for (var i = 0; i < regListKeys.length; i++) {
    if (regListKeys[i] === textInputElement.value.toLowerCase()) {
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
        feedbackElem.innerHTML = "Invalid input format or characters"
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

addBtn2.addEventListener('click', () => {
  var gotRegList = reg.getRegList2();
  var regListKeys = Object.keys(gotRegList);
  var flagRegFound = false;

  for (var i = 0; i < regListKeys.length; i++) {
    if (regListKeys[i] === textInputElement2.value.toLowerCase()) {
      flagRegFound = true;
    }
  }
  if (flagRegFound === false) {
    if (reg.checkRegNum(textInputElement2.value.toLowerCase())) {
      if (regEx.test(textInputElement2.value)) {
        reg.addButton2(textInputElement2.value.toLowerCase());
        localStorage.setItem("registration2", JSON.stringify(gotRegList));
        regList2.innerHTML = "";
        createList2();

        feedbackElem2.style.color = "green";
        feedbackElem2.innerHTML = "Registration number successfully added!"
        setTimeout(() => { feedbackElem2.innerHTML = "" }, 5000);
        setTimeout(() => { feedbackElem2.style.color = "black" }, 5000);
      } else {
        feedbackElem2.style.color = "red";
        feedbackElem2.innerHTML = "Invalid input format or characters"
        setTimeout(() => { feedbackElem2.innerHTML = "" }, 5000);
        setTimeout(() => { feedbackElem2.style.color = "black" }, 5000);
      }
    } else if (textInputElement2.value === "") {
      feedbackElem2.style.color = "red";
      feedbackElem2.innerHTML = "No characters detected!"
      setTimeout(() => { feedbackElem2.innerHTML = "" }, 5000);
      setTimeout(() => { feedbackElem2.style.color = "black" }, 5000);
    } else {
      feedbackElem2.style.color = "red";
      feedbackElem2.innerHTML = "Please enter a license plate belonging to either Bellville, Cape Town or Malmesbury"
      setTimeout(() => { feedbackElem2.innerHTML = "" }, 5000);
      setTimeout(() => { feedbackElem2.style.color = "black" }, 5000);
    }
  } else {
    feedbackElem2.style.color = "red";
    feedbackElem2.innerHTML = "Registration number has already been registered"
    setTimeout(() => { feedbackElem2.innerHTML = "" }, 5000);
    setTimeout(() => { feedbackElem2.style.color = "black" }, 5000);
  }

  textInputElement2.value = "";
});

showBtn.addEventListener('click', () => {
  const checkedTown = document.querySelector("input[name='townFilter']:checked");

  if (checkedTown) {
    regList.innerHTML = "";
    for (var i = 0; i < regKeys.length; i++) {
      if (regKeys[i].startsWith(checkedTown.value)) {
        regList.innerHTML += '<li class="regListItem">' + regKeys[i].toUpperCase() + "</li>";
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

showBtn2.addEventListener('click', () => {
  const checkedTown = document.querySelector("input[name='townFilter2']:checked");
  var filteredArray = [];

  if (checkedTown) {
    regList2.innerHTML = "";
    for (var i = 0; i < regKeys.length; i++) {
      if (regKeys[i].startsWith(checkedTown.value)) {
        filteredArray.push(regKeys[i].toUpperCase());
      }
    }

    var templateSource = document.querySelector(".template").innerHTML;
    var template = Handlebars.compile(templateSource);
    var dataElem = document.getElementById("regList2");
    var dataHTML = template({ reg: filteredArray });
    dataElem.innerHTML = dataHTML;

  } else {
    feedbackElem2.style.color = "red";
    feedbackElem2.innerHTML = "Please select a town"
    setTimeout(() => { feedbackElem2.innerHTML = "" }, 5000);
    setTimeout(() => { feedbackElem2.style.color = "black" }, 5000);
  }

  if (regList2.innerHTML === "") {
    feedbackElem2.style.color = "red";
    feedbackElem2.innerHTML = "No registration numbers stored for this town"
    setTimeout(() => { feedbackElem2.innerHTML = "" }, 5000);
    setTimeout(() => { feedbackElem2.style.color = "black" }, 5000);

    createList2();
  }
})

showAllBtn.addEventListener('click', () => {
  regList.innerHTML = "";

  createList();
})

showAllBtn2.addEventListener('click', () => {
  regList2.innerHTML = "";

  createList2();
})

resetBtn.addEventListener('click', () => {
  localStorage.removeItem("registration");
  location.reload();
});

resetBtn2.addEventListener('click', () => {
  localStorage.removeItem("registration2");
  location.reload();
})