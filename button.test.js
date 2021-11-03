// import button file
const functions = require('./button');


// unit test to determine if the button is clicked
testClick('change text when button is clicked', () => {
     expect(functions.testClick("Hello", "Goodbye")).toBe("Goodbye");
});
