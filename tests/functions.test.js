describe("Factory function tests:", () => {
    describe("Function checkRegNum:", () => {
        it("Output should be true if input = ca 55332", () => {
            const reg = regFunctions();
            assert.equal(reg.checkRegNum("ca 55332"), true);
        })
        it("Output should be true if input = cy 33445", () => {
            const reg = regFunctions();
            assert.equal(reg.checkRegNum("ck 33445"), true);
        })
        it("Output should be false if input = cn 22456", () => {
            const reg = regFunctions();
            assert.equal(reg.checkRegNum("cn 22456"), false)
        })
    })
    describe("Error logic:", () => {
        it("Output should equal 'Registration successful' when input is 'cy 123-45'", () => {
            const regEx = /(^[a-z]{2}\s\d{5}$)|(^[a-z]{2}\s\d{3}-\d{2}$)/i;
            const regNum = "cy 123-45";
            function errorLogic() {
                if (reg.checkRegNum(regNum)) {
                    if (regEx.test(regNum)) {
                        return "Registration successful"
                    } else {
                        return "Incorrect format detected"
                    }
                } else if (regNum === "") {
                    return "No input detected"
                } else {
                    return "Please enter a license plate belonging to Bellville, Cape Town or Malmesbury"
                }
            }
            assert.deepEqual(errorLogic(), "Registration successful");
        })
        it("Output should equal 'Incorrect format detected' when input is 'cy 123 45'", () => {
            const regEx = /(^[a-z]{2}\s\d{5}$)|(^[a-z]{2}\s\d{3}-\d{2}$)/i;
            const regNum = "cy 123 45";
            function errorLogic() {
                if (reg.checkRegNum(regNum)) {
                    if (regEx.test(regNum)) {
                        return "Registration successful"
                    } else {
                        return "Incorrect format detected"
                    }
                } else if (regNum === "") {
                    return "No input detected"
                } else {
                    return "Please enter a license plate belonging to Bellville, Cape Town or Malmesbury"
                }
            }
            assert.deepEqual(errorLogic(), "Incorrect format detected");
        })
        it("Output should equal 'No input detected' when input is an empty string", () => {
            const regEx = /(^[a-z]{2}\s\d{5}$)|(^[a-z]{2}\s\d{3}-\d{2}$)/i;
            const regNum = "";
            function errorLogic() {
                if (reg.checkRegNum(regNum)) {
                    if (regEx.test(regNum)) {
                        return "Registration successful"
                    } else {
                        return "Incorrect format detected"
                    }
                } else if (regNum === "") {
                    return "No input detected"
                } else {
                    return "Please enter a license plate belonging to Bellville, Cape Town or Malmesbury"
                }
            }
            assert.deepEqual(errorLogic(), "No input detected");
        })
        it("Output should equal 'Please enter a license plate belonging to Bellville, Cape Town or Malmesbury' when input is 'cv 223-66'", () => {
            const regEx = /(^[a-z]{2}\s\d{5}$)|(^[a-z]{2}\s\d{3}-\d{2}$)/i;
            const regNum = "cv 223-66";
            function errorLogic() {
                if (reg.checkRegNum(regNum)) {
                    if (regEx.test(regNum)) {
                        return "Registration successful"
                    } else {
                        return "Incorrect format detected"
                    }
                } else if (regNum === "") {
                    return "No input detected"
                } else {
                    return "Please enter a license plate belonging to Bellville, Cape Town or Malmesbury"
                }
            }
            assert.deepEqual(errorLogic(), "Please enter a license plate belonging to Bellville, Cape Town or Malmesbury");
        })
    })
});