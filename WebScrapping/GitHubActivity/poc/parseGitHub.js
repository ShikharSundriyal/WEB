let request = require("request");
let cheerio = require("cheerio");
let mainUrl = "https://github.com/topics";
let subUrls = [];
request(mainUrl,cb);
function cb(err, response, html){
    let chSelector = cheerio.load(html);
    
    let topics = chSelector(".no-underline.d-flex.flex-column.flex-justify-center");
    for(let i = 0;i<topics.length;i++){
        let topicContent = chSelector(topics[i]).text();
        //console.log();
        topicContent = topicContent.split("\n")[3].trim(); 
        let topicName = chSelector(topics[i]).attr("href");
        subUrls[i] = "https://github.com"+topicName;
        console.log(topicContent,subUrls[i]);
        request(subUrls[i],cb1);
    }
    //console.log(subUrls);
}
function cb1(err, response, html){
    let chSelector = cheerio.load(html);
    let mainFolder = chSelector(".h1-mktg").text();
    let urlArray = [];
    console.log(mainFolder.trim());
    let repos = chSelector(".f3.color-text-secondary.text-normal.lh-condensed a[href]");
    for(let i = 1; i < 17;i+=2){
        let reponame = chSelector(repos[i]).attr("href");
        
        let fullRepoUrl = "https://github.com"+reponame;
        urlArray.push(fullRepoUrl);
        console.log("https://github.com"+reponame);
    }
    createJson(mainFolder.trim(),urlArray);
    
    for(let i = 0;i<urlArray.length;i++){
        let issueUrl = urlArray[i]+"/issues";
         request(issueUrl,cb2);
        
        //fs.writeFileSync(mainFolder+"\\"+linkAndIssue[0].Link.split("//")[1].split("/")[1]+".json" ,JSON.stringify);
    }

}

function cb2(err,response,html){
    let chSelector = cheerio.load(html);
    let issuesArray = chSelector(".Link--primary.v-align-middle.no-underline.h4.js-navigation-open"); 
    
    let arr= [];
    for(let i = 0;i<issuesArray.length;i++){
        let link  = chSelector(issuesArray[i]).attr("href");
        //console.log(link);
        let issuesText = chSelector(issuesArray[i]).text()
        let issuesObj = {
            Link:"https://github.com"+link,
            IssueName : issuesText
        }
        arr.push(issuesObj);
    }
    //console.log(arr);
    
   }

var fs = require('fs');

function createJson(rootFolder, urlArray){
    if (!fs.existsSync(rootFolder)){
        fs.mkdirSync(rootFolder);
    }
    let data = {};
    for(let i =0;i<urlArray.length;i++){
        let fileName = urlArray[i].split("//").pop().split("/").pop();
        if(!fs.existsSync(rootFolder+"\\"+fileName+".json"))
            fs.openSync(rootFolder+"\\"+fileName+".json","w");
        //data[urlArray[i].split("//").pop().split("/").pop()].push(urlArray);
    }
    //console.log(data);
    //fs.writeFileSync(rootFolder+"//"+rootFolder+".json", data);
}