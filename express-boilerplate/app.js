const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const PORT = process.env.PORT;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(session({
    secret: 'TELL_ME_ALL_YOUR_SECRETS',
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
    },
    resave: false,
    saveUninitialized: false,
    rolling: true,
}));

app.use((req, res, next) => {
    res.setHeader('x-express-cluster-pid', process.pid);
    next();
});
app.get('/', (req, res) => {
    res.send('ok');
});

module.exports = app;
