const puppeteer = require("puppeteer");

let browseropenP = puppeteer.launch({
    headless:false
});
console.log("before");
browseropenP.then(function (browser) {
    
    console.log("browser opened");
    
    let alltabsPromise = browser.pages();
    
    alltabsPromise.then(function (tabs){
        let page = tabs[0];
        
        let googlehomePageOpenPromise = page.goto("https://www.google.com/");

        googlehomePageOpenPromise.then(function (){
            console.log("google home page opened");
        })
    } )
});
console.log("after");