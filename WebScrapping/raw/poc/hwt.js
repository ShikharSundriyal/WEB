let request = require("request");
let cheerio = require("cheerio");
const { type } = require("os");
// input -> commentary page url 
// https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/ball-by-ball-commentary
let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";
request(url, cb)
// intial content -> scrap 
// last ball commentry
// first ball commentary 
// automation -> browser

function cb(err, response, html) {
    
    let chSelector = cheerio.load(html);
    let tables = chSelector(".table.bowler");
    let bowlerHtmlString = "";
    for(let i = 0;i<tables.length;i++){
        let teamBowlers = chSelector(tables[i]).find("tr");
        for(let j =0; j<teamBowlers.length;j++){
            let eachbowlcol = chSelector(teamBowlers[j]).find("td");
            let playerName = chSelector(eachbowlcol[0]).text();
            let wickets = chSelector(eachbowlcol[4]).text();
            console.log(playerName,wickets);
        }
    }
    
}

