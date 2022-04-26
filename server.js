let express = require('express')
let api_routes = require('./routes/api.js')

let app = express()

app.use(express.json())

app.use('/api', api_routes)

let server = app.listen(process.env.PORT || 3000, function(){
    console.log('Express server running on port ', server.address().port)
})