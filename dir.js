const fs = require('fs')
if(fs.existsSync('./new')){
    fs.rmdir('./new',(err)=>{
        if (err) throw err
        console.log('Directory completed')
    })
    
}
if(!fs.existsSync('./new')){
    fs.mkdir('./new',(err)=>{
        if (err) throw err
        console.log('Directory completed')
    })
    
}


process.on('uncaughtError',(err)=>{
    console.log(`There was a uncaughterror:${err}`)
})