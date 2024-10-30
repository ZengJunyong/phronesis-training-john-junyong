import express from 'express';
import cors from 'cors';
import rebillyRoutes from './routes/rebilly.js';

const app = express();
const port = 80;

app.use(cors());
app.use(express.json());
app.use('/rebilly', rebillyRoutes);

const startServer = async () => {
    try {
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    } catch (err) {
        process.exit(1);
    }
};

await startServer();

const handleExit = async (signal) => {
    process.exit(0);
};

process.on('SIGINT', handleExit);
process.on('SIGTERM', handleExit);
process.on('exit', async () => {
});
