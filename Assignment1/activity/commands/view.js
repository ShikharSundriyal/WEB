function viewHelper(dirname, mode){
    if(mode == "tree"){
        console.log("tree view will be shown for ",dirname);
    }else if(mode == "flat"){
        console.log("flat structure will be shown for",dirname);
    }
}
module.exports = {
    fn:viewHelper
}