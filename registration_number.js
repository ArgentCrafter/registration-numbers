const textInputElement = document.getElementById('addReg');
const addBtn = document.getElementById('addRegBtn');
const resetBtn = document.getElementById('resetBtn');
const showBtn = document.getElementById('showBtn');
const showAllBtn = document.getElementById('showAllBtn');

resetBtn.addEventListener('click', () => {
  localStorage.clear();
  Location.reload();
});
