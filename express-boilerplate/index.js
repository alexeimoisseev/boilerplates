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

app.get('/', (req, res) => {
    res.send('ok');
});


function getHost(addr) {
    if (addr.family === 'IPv6') {
        return `[${addr.address}]`;
    }
    return addr.address;
}
const server = app.listen(PORT || 8080, () => {
    const addr = server.address();
    // eslint-disable-next-line
    console.log(`App listening on http://${getHost(addr)}:${addr.port}/`);
});
