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
    let MaxRuns = -1;
    let player = "";
    let chSelector = cheerio.load(html);
    let tables = chSelector(".table.batsman");
    
    for(let i = 0;i<tables.length;i++){
        let teamBatsman = chSelector(tables[i]).find("tr");
        for(let j =0; j<teamBatsman.length;j++){
            let eachBatsmancol = chSelector(teamBatsman[j]).find("td");
            if(eachBatsmancol.length == 8){
                let playerName = chSelector(eachBatsmancol[0]).text();
            let runs = parseInt(chSelector(eachBatsmancol[2]).text());
            if(MaxRuns < runs){
                MaxRuns = runs;
                player = playerName;
            }
            // console.log(playerName,runs);
            }
            
        }
    }
    console.log(player,MaxRuns);
    
}

