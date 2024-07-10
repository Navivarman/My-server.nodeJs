const fs = require('fs')
const path = require('path')
const rs = fs.createReadStream(path.join(__dirname,'files','bigfile.txt'),{encoding : 'utf8'})
const ws = fs.createWriteStream(path.join(__dirname,'files','newbigfile.txt'))

/* rs.on('data',(dataChunk) =>{
    ws.write(dataChunk)
}) */
rs.pipe(ws)