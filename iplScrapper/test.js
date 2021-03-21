let request = require("request");
let cheerio = require("cheerio");
let iplHomepage = "https://www.espncricinfo.com/series/ipl-2020-21-1210595";
urlArray = ["https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard"];
// (function ifeee() {
//     request(iplHomepage, cb);
// }
// )();

// // request(iplHomepage, cb);
// function cb(err, response, html) {

//     let chSelector = cheerio.load(html);
//     let a = chSelector(".widget-items.cta-link a");
//     let matchResultsLink = "https://www.espncricinfo.com/" + chSelector(a).attr("href");
//     console.log(matchResultsLink);
//     request(matchResultsLink, cbMatchLinks);
// }

// function cbMatchLinks(err, response, html) {
//     let chSelector = cheerio.load(html);
//     let scorecardLinks = chSelector(".btn.btn-sm.btn-outline-dark.match-cta");
//     for (let i = 2; i <= scorecardLinks.length; i += 4) {
//         urlArray.push("https://www.espncricinfo.com/" + chSelector(scorecardLinks[i]).attr("href"));
//     }
// console.log(urlArray.length);
// }

request(urlArray[0],cb);
function cb(err,response,html){
    let chSelector = cheerio.load(html);
    let result = chSelector(".match-info.match-info-MATCH");
    let teams = chSelector(result).find(".name-detail a");
    let team1 = chSelector(teams[0]).text();
    let team2 = chSelector(teams[1]).text();
    console.log(team1+" "+team2);
    let winningTeam;
    if(chSelector(teams[0]).hasClass("team-gray")){
        winningTeam = team1;
    }else{
        winningTeam = team2;
    }
    console.log(winningTeam)


    let resultBox = chSelector(result).find(".description");
    let str = chSelector(resultBox).text();
    let MatchVenue = str.split(",")[1].trim();
    let MatchDate = str.split(",")[2].trim();
    console.log(MatchDate,MatchVenue);
}