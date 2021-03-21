let request = require("request");
let cheerio = require("cheerio");
let fs = require("fs");
let iplHomepage = "https://www.espncricinfo.com/series/ipl-2020-21-1210595";
let arr = [];
let urlArray = [];
let num = 0;
/* IFEEE function to kickstart the processing*/
(function bootup() {
    request(iplHomepage, cb0);
}
)();
/* callback function to reach all matches URL from main url */
function cb0(err, response, html) {

    let chSelector = cheerio.load(html);
    let a = chSelector(".widget-items.cta-link a");
    let matchResultsLink = "https://www.espncricinfo.com/" + chSelector(a).attr("href");
    console.log("Match Results Page Link :",matchResultsLink);
    request(matchResultsLink, cbMatchLinks);
}
/* fucntion to populate the suburls to all the matches*/
function cbMatchLinks(err, response, html) {
    let chSelector = cheerio.load(html);
    let scorecardLinks = chSelector(".btn.btn-sm.btn-outline-dark.match-cta");
    for (let i = 2; i <= scorecardLinks.length; i += 4) {
        urlArray.push("https://www.espncricinfo.com/" + chSelector(scorecardLinks[i]).attr("href"));
    }

    serialUrlProcessor(num, urlArray);
}

function serialUrlProcessor(num, urlArray) {

    if (num == urlArray.length)
        return;
    request(urlArray[num], cb)
}
/* callback function to to process each match and each players scores*/
function cb(err, response, html) {
    let chSelector = cheerio.load(html);
    let batsmenTable = chSelector(".table.batsman")
    for (let i = 0; i < batsmenTable.length; i++) {
        let playerRows = chSelector(batsmenTable[i]).find("tr");
        let teamName = chSelector(chSelector(".header-title.label")[i]).text().split("INNINGS")[0].trim();
        for (let j = 0; j < playerRows.length; j++) {
            let playerRow = chSelector(playerRows[j]).find("td");
            if (playerRow.length == 8) {
                let playerName = chSelector(playerRow).find("a").text();
                let runs = chSelector(playerRow[2]).text();
                let balls = chSelector(playerRow[3]).text();
                let fours = chSelector(playerRow[5]).text();
                let sixes = chSelector(playerRow[6]).text();
                let strikeRate = chSelector(playerRow[7]).text();
                //console.log(playerName + " " + runs +" " + balls + " "+ fours +" "+ sixes+" "+strikeRate);
                let details = { "runs": runs, "balls": balls, "fours": fours, "sixes": sixes, "StrikeRate": strikeRate };
                arr.push({
                    TeamName: teamName,
                    Name: playerName,
                    details: details
                });
            }
        }
    }

    createFolders(arr);
    arr = [];
    console.log(arr);
    num++;
    serialUrlProcessor(num, urlArray);
    console.log(num);
}
/* Function to create the folders for batsmen*/
function createFolders(arr) {
    for (let i = 0; i < arr.length; i++) {
        let elem = arr[i];
        if (!fs.existsSync("./" + elem["TeamName"])) {
            fs.mkdirSync("./" + elem["TeamName"]);
        }
        if (!fs.existsSync("./" + elem["TeamName"] + "/" + elem["Name"] + ".json")) {
            // File does not exist
            fs.writeFileSync("./" + elem["TeamName"] + "/" + elem["Name"] + ".json", JSON.stringify([elem["details"]]));
        } else {
            let file = fs.readFileSync("./" + elem["TeamName"] + "/" + elem["Name"] + ".json");
            let data = JSON.parse(file);
            data.push(elem["details"]);
            fs.writeFileSync("./" + elem["TeamName"] + "/" + elem["Name"] + ".json", JSON.stringify(data));
        }

    }
    
    arr = [];
}

