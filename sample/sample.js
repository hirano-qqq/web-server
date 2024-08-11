
const {read,write,} = require("./helper")


const request = process.argv[2];
if(request === "read"){
    read()
    }else if(request === "write"){
    write()
    } else{
        console.error("エラー：readまたはwriteの引数を入れてください")
    }
    

