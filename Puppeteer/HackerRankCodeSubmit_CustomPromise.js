const puppet = require("puppeteer")
let { answers } = require("./code")
let browserOpenPromise = puppet.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"]
});
let page;
const url = "https://www.hackerrank.com/auth/login";
function waitNClick(selector) {
    return new Promise(function (resolve, reject) {
        let waitPromise = page.waitForSelector(selector, { visible: true });
        waitPromise
            .then(function () {
                return page.click(selector);
            }).then(function () {
                resolve();
            })
    });
}

function questionSolver(url) {
    return new Promise(function (resolve, reject) {
        let gotoQuestionPromise = page.goto(url);
        gotoQuestionPromise
            .then(function () {
                let checkboxPromise = waitNClick(".ui-checkbox.theme-m");
                return checkboxPromise;
            }).then(function () {
                let waitForTextBoxPromise = page.waitForSelector(".custominput", { visible: true });
                return waitForTextBoxPromise;
            }).then(function () {
                let writeCodePromise = page.type(".custominput", answers[0], { delay: 4 });
                return writeCodePromise;
            }).then(function(){
                return page.keyboard.down("Control");
            }).then(function (){
                return page.keyboard.press("a");
            }).then(function (){
                return page.keyboard.press("x");
            }).then(function(){
                return page.keyboard.up("Control");
            }).then(function (){
                return page.click(".monaco-editor.no-user-select.vs");
            }).then(function (){
                return page.keyboard.down("Control");
            }).then(function (){
                return page.keyboard.press("a");
            }).then(function (){
                return page.keyboard.press("v");
            }).then(function (){
                return page.keyboard.up("Control");
            }).then(function (){
                return page.click(".ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled");
            }).catch(function (err){
                console.log(err);
            })
    });
}
browserOpenPromise
    .then(function (browser) {
        let tabsPromise = browser.pages();
        return tabsPromise;
    }).then(function (tabs) {
        page = tabs[0];
        let gotoHackerRankPromise = page.goto(url);
        return gotoHackerRankPromise;
    }).then(function () {
        let typeEmailPromise = page.type("input[name='username']", "vifego6030@zcai66.com", { delay: 100 });
        return typeEmailPromise;
    }).then(function () {
        let passwordWritePromise = page.type("input[name='password']", "vife18", { delay: 100 });
        return passwordWritePromise;
    }).then(function () {
        let submitPromise = page.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
        return submitPromise;
    }).then(function () {
        let interviewPrepartionPromise = waitNClick(".ui-btn.ui-btn-normal.ui-btn-large.ui-btn-primary.ui-btn-link.ui-btn-styled");
        return interviewPrepartionPromise;
    }).then(function () {
        let warmUpPromise = waitNClick(".ui-btn.ui-btn-normal.playlist-card-btn.ui-btn-primary.ui-btn-link.ui-btn-styled");
        return warmUpPromise;
    }).then(function () {
        // wait for all challenges
        return page.waitForSelector("a[data-analytics='ChallengeListChallengeName']", { visible: true });
    }).then(function () {
        function getLinks() {
            let allElem = document.querySelectorAll("a[data-analytics='ChallengeListChallengeName']");
            let linksArr = [];
            for (let i = 0; i < allElem.length; i++) {
                linksArr.push("https://www.hackerrank.com" + allElem[i].getAttribute("href"));
            }
            return linksArr;
        }
        let allLinksPromise = page.evaluate(getLinks);
        return allLinksPromise;
    }).then(function (linksArray) {
        let questionSolvedPromise = questionSolver(linksArray[0]);
        return questionSolvedPromise;
    }).then(function () {
        console.log("question solved");
    })

