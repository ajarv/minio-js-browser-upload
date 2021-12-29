var Minio = require('minio');
var morgan = require('morgan')

var client = new Minio.Client({
    endPoint: '192.168.0.11',
    port: 9000,
    useSSL: false,
    accessKey: process.env.MINIO_KEY ,
    secretKey: process.env.MINIO_SECRET,
})

// express is a small HTTP server wrapper, but this works with any HTTP server
const server = require('express')()
server.use(morgan('combined'))

server.get('/presignedUrl', (req, res) => {
    client.presignedPutObject('valley', req.query.name, (err, url) => {
        if (err) throw err
        res.end(url)
    })
})

server.get('/', (req, res) => {
    console.log("hh")
    res.sendFile(__dirname + '/index.html');
})

const port = 9080
server.listen(port,'0.0.0.0', () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })