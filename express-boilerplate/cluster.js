const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

const app = require('./app');

const PORT = process.env.PORT;

if (cluster.isMaster) {
    console.log(`Master pid: ${process.pid}`);
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died with code ${code} by signal ${signal}`);
    });
} else {
    const server = app.listen(PORT || 8080, () => {
        // eslint-disable-next-line
        console.log(`Worker ${process.pid}`);
    });
}