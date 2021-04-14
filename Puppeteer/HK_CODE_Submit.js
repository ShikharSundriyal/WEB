const puppet = require("puppeteer");
let browserOpenPromise = puppet.launch({
    headless:false,
    defaultViewport:null,
    args:["--start-maximized"]
});
const url = "https://www.hackerrank.com/auth/login";
let page;
browserOpenPromise
    .then(function (browser){
        let allTabsPromise = browser.pages();
        return allTabsPromise;
    }).then(function (tabs){
        page = tabs[0];
        let hackerRankLoginPromise = page.goto(url);
        return hackerRankLoginPromise;
    }).then(function (){
        let emailFillPromise = page.type("input[name='username']","vifego6030@zcai66.com",{delay:200});
        return emailFillPromise;
    }).then(function (){
        let passwordFillPromise = page.type("input[name='password']","vife18",{delay:100});
        return passwordFillPromise;
    }).then(function (){
        return page.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
    }).then(function (){
        let waitForIpKitPromise = page.waitForSelector(".ui-btn.ui-btn-normal.ui-btn-large.ui-btn-primary.ui-btn-link.ui-btn-styled",{visible:true});
        return waitForIpKitPromise;
    }).then(function (){
        let navigateInterviewPrepPromise = page.click(".ui-btn.ui-btn-normal.ui-btn-large.ui-btn-primary.ui-btn-link.ui-btn-styled");
        return navigateInterviewPrepPromise;
    }).then(function (){
        let waitForWarmupPromise = page.waitForSelector(".ui-btn.ui-btn-normal.playlist-card-btn.ui-btn-primary.ui-btn-link.ui-btn-styled");
        return waitForWarmupPromise;
    }).then(function (){
        return page.click(".ui-btn.ui-btn-normal.playlist-card-btn.ui-btn-primary.ui-btn-link.ui-btn-styled");
    }).then(function (){
        console.log("Reached warmup");
    })
