__path = process.cwd();
var express = require('express'),
    cors = require('cors'),
    secure = require('ssl-express-www');
const PORT = process.env.PORT || 8080 || 5000 || 3000
var { color } = require('./opoya/color.js')

var mainrouter = require('./system/main'),
    apirouter = require('./system/api')

var app = express()
app.enable('trust proxy');
app.set("json spaces",2)
app.use(cors())
app.use(secure)
app.use(express.static("public"))

app.use('/', mainrouter);
app.use('/api', apirouter);

app.listen(PORT, () => {
    console.log(color("running on port " + PORT,'green'))
})

module.exports = app
