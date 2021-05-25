function regFunctions() {
  var regList = {};

  function addButton(input) {
    if ((input.startsWith('ca')) || (input.startsWith('cy')) || (input.startsWith('ck'))) {
      if (regList[input] === undefined) {
        regList[input] = 1;
      }
    }
  }

  function checkRegNum(input) {
    if ((input.startsWith('ca')) || (input.startsWith('cy')) || (input.startsWith('ck'))) {
      return true;
    } else {
      return false;
    }
  }

  function setRegList(input) {
    regList = input;
  }

  function getRegList() {
    return regList;
  }

  return {
    addButton,
    setRegList,
    getRegList,
    checkRegNum
  };
}
