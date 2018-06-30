const app = require('./app');

const PORT = process.env.PORT;

const server = app.listen(PORT || 8080, () => {
    // eslint-disable-next-line
    console.log(`Serving on http://localhost:${server.address().port}/`);
});