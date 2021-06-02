function regFunctions() {
  var regList = {};
  var regList2 = {};

  function addButton(input) {
    if ((input.startsWith('ca')) || (input.startsWith('cy')) || (input.startsWith('ck'))) {
      if (regList[input] === undefined) {
        regList[input] = 1;
      }
    }
  }

  function addButton2(input) {
    if ((input.startsWith('ca')) || (input.startsWith('cy')) || (input.startsWith('ck'))) {
      if (regList2[input] === undefined) {
        regList2[input] = 1;
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

  function setRegList2(input) {
    regList2 = input;
  }

  function getRegList() {
    return regList;
  }

  function getRegList2() {
    return regList2;
  }

  return {
    addButton,
    addButton2,
    setRegList,
    setRegList2,
    getRegList,
    getRegList2,
    checkRegNum
  };
}
