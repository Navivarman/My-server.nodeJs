const path = require('path')
const fspromises = require('fs').promises

const files = async() =>{
    try {
        const data = await fspromises.readFile(path.join(__dirname,'files','text.txt'),'utf8')
        console.log(data)
        await fspromises.writeFile(path.join(__dirname,'files','text.txt'),'I am studying in Rathinam Technical Campus')
        console.log("Write complete")
        await fspromises.appendFile(path.join(__dirname,'files','text.txt'),'\n I am a fullstack developer')
        console.log('Append complete')
        await fspromises.rename(path.join(__dirname,'files','text.txt'),path.join(__dirname,'files','navi.txt'))
        console.log("Rename complete")
         
    }
    catch(err){
        console.error(err)
    }

}

files()