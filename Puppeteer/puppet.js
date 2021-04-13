const puppeteer = require("puppeteer");
let page;
let browseropenP = puppeteer.launch({
    headless:false
});
console.log("before");
browseropenP
    .then(function (browser) {
        console.log("browser opened");
        let alltabsPromise = browser.pages(); // get all pages
        alltabsPromise
            .then(function (tabs){
                page = tabs[0];
                let googlehomePageOpenPromise = page.goto("https://www.google.com/"); // goto google.com
                googlehomePageOpenPromise 
                    .then(function (){
                        console.log("mdn home page opened");
                        function fn(){
                            return document.querySelector(".gb_4.gb_5.gb_ae.gb_ce.gb_4c").innerText
                        }
                        let resPromise = page.evaluate(fn);
                        resPromise
                            .then(function (val){
                            console.log(val);
                        })
                    })
            })
    });
console.log("after");