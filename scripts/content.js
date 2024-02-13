buttons = document.querySelectorAll("button#WelcomeButton-A11Y-FOCUS-ID");
id="WelcomeButton-A11Y-FOCUS-ID"
console.log(`Number of buttons found ${buttons.length}`);
// Loop through each selected button
buttons.forEach(button => {
    // Your logic for each button goes here
    button.click();
    console.log(button);
});


// document.addEventListener("DOMContentLoaded", function() {
//     const button = document.querySelector("button#WelcomeButton-A11Y-FOCUS-ID");
//     if (button) {
//         button.click();
//         console.log(button);
//     } else {
//         console.log(`No button found :(`)
//     }
// });