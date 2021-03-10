let request = require("request");
let cheerio = require("cheerio");
let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";

function singleTeamStatsExtractor(url){
    request(url,cb);
}


//callback function
function cb(err, response, html){
    let chSelector = cheerio.load(html);
    let bothMatches = chSelector(".event .teams>.team");
    let myTeam ;
    for(let i = 0; i<bothMatches.length;i++){
        let isLoosing = chSelector(bothMatches[i]).hasClass("team-gray");
        if(isLoosing == false){
            let myTeamElem = chSelector(bothMatches[i]).find(".name-detail a");
            myTeam = myTeamElem.text(); // get the name of winning team
        }
    }
    let colInnings = chSelector(".Collapsible"); //both block for winning and loosing team
    let bothInningsTeamName = chSelector(".Collapsible .header-title.label"); // team name
    for(let j = 0; j< bothInningsTeamName.length;j++){
        let teamName = chSelector(bothInningsTeamName[j]).text();
        let teamFirstName = teamName.split("INNINGS")[0].trim();
        if(teamFirstName == myTeam){
            let winTeamInning = chSelector(colInnings[j]);
            printTeamStats(winTeamInning, chSelector);
        }
    }
}
function printTeamStats(winTeamInning, chSelector){
    let statsArr = [];
    let allRows = chSelector(winTeamInning).find(".table.batsman tbody tr");
    for(let j = 0;j<allRows.length;j++){
        let eachbatcol = chSelector(allRows[j]).find("td");
        if(eachbatcol.length == 8){
            let playerName = chSelector(eachbatcol[0]).text();
            let runs = chSelector(eachbatcol[2]).text();
            statsArr.push({
                Name:playerName,
                Runs:runs
            });
        }
    }
    console.table(statsArr);
}

module.exports = {
    fn:singleTeamStatsExtractor
}