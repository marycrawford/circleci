// import button file
const testClickButton = require('./button');


// unit test to determine if the button is clicked changes the text
test('change text when button is clicked', () => {
     expect(testClickButton("Hello", "Goodbye")).toBe("Goodbye");
});
