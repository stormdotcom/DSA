import cluster from 'cluster';
import http from 'http';
import { cpus } from 'os';

const numCPUs = cpus().length;

if (cluster.isPrimary) {
    console.log(`Master ${process.pid} is running`);

    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    });
}
else {
    // Workers can share any TCP connection
    // In this case, each worker listens on a different port
    const port = 8000
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end(`Hello from Worker ${process.pid}. You are connected to port ${port}`);

        // Close the server after sending the response
    }).listen(port);

    console.log(`Worker ${process.pid} started and listening on port ${port}`);
}
