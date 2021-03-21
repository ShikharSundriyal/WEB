let request = require("request");
let cheerio = require("cheerio");
let iplHomepage = "https://www.espncricinfo.com/series/ipl-2020-21-1210595";
urlArray = [];
(function ifeee() {
    request(iplHomepage, cb);
}
)();

// request(iplHomepage, cb);
function cb(err, response, html) {

    let chSelector = cheerio.load(html);
    let a = chSelector(".widget-items.cta-link a");
    let matchResultsLink = "https://www.espncricinfo.com/" + chSelector(a).attr("href");
    console.log(matchResultsLink);
    request(matchResultsLink, cbMatchLinks);
}

function cbMatchLinks(err, response, html) {
    let chSelector = cheerio.load(html);
    let scorecardLinks = chSelector(".btn.btn-sm.btn-outline-dark.match-cta");
    for (let i = 2; i <= scorecardLinks.length; i += 4) {
        urlArray.push("https://www.espncricinfo.com/" + chSelector(scorecardLinks[i]).attr("href"));
    }

}