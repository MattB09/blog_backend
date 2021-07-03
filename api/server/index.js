var express = require('express');
var _a = require('express'), Request = _a.Request, Response = _a.Response;
var cookieParser = require('cookie-parser');
var cors = require('cors');
require('dotenv').config();
// const routes = require('./routes')
var app = express();
var allowedOrigins = ['http://localhost:3000'];
app.use(cors({
    origin: function (origin, callback) {
        //allow requests with no origin
        if (!origin)
            return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            var msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    credentials: true
}));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get('/', function (req, res) {
    res.json('hello');
});
var PORT = process.env.PORT || 4000;
app.listen(PORT, function () {
    console.log("Server listening at localhost:" + PORT);
});
