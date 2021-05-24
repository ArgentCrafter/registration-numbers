function regFunctions() {
  var regList = {};

  function addButton(input) {
    console.log(input);
    if ((input.startsWith('ca')) || (input.startsWith('cy')) || (input.startsWith('ck'))) {
      if (regList[input] === undefined) {
        regList[input] = 1;
      } else {
        regList[input]++;
      }
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
    getRegList
  };
}
