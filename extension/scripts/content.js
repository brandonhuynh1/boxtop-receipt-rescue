// buttons = document.querySelectorAll("button#WelcomeButton-A11Y-FOCUS-ID");
// // id="WelcomeButton-A11Y-FOCUS-ID"
// console.log(`Number of buttons found ${buttons.length}`);
// // Loop through each selected button
// buttons.forEach(button => {
//     // Your logic for each button goes here
//     button.click();
//     console.log(button);
// });

function waitForElementToExist(selector) {
    return new Promise(resolve => {
      if (document.querySelector(selector)) {
        return resolve(document.querySelector(selector));
      }
  
      const observer = new MutationObserver(() => {
        if (document.querySelector(selector)) {
          resolve(document.querySelector(selector));
          observer.disconnect();
        }
      });
  
      observer.observe(document.body, {
        subtree: true,
        childList: true,
      });
    });
  }
  
  // 👇️ using the function
  waitForElementToExist('button#WelcomeButton-A11Y-FOCUS-ID').then(element => {
    console.log('The element exists', element);
    element.click();
  });
  


// document.addEventListener("DOMContentLoaded", function(){
//     // Code here waits to run until the DOM is loaded.
//     console.log("DOM Content Loaded");

//     welcomeButton = document.querySelector("button#WelcomeButton-A11Y-FOCUS-ID");
//     welcomeButton.click();
// });

// document.addEventListener("DOMContentLoaded", function(){
//     // Code here waits to run until the DOM is loaded.
//     purchaseButton = document.querySelector("li#WelcomeMenu-2041991b-6400-4b0a-a10e-fdf1cfbeb078");
//     purchaseButton.click();
// });

// // id="WelcomeMenu-2041991b-6400-4b0a-a10e-fdf1cfbeb078"
// purchaseButton = document.querySelector("li#WelcomeMenu-2041991b-6400-4b0a-a10e-fdf1cfbeb078")

// purchaseButton.click();
// document.addEventListener("DOMContentLoaded", function() {
//     const button = document.querySelector("button#WelcomeButton-A11Y-FOCUS-ID");
//     if (button) {
//         button.click();
//         console.log(button);
//     } else {
//         console.log(`No button found :(`)
//     }
// });