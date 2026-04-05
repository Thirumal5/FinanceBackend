import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config();
import connectDb from './DB/Db.js'
import Userrouter from './routes/Userroutes.js'
import RecordRouter from './routes/recordroutes.js';
import DashboardRouter from './routes/dashboardRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


app.get('/test', (req, res) => {
    res.sendFile(path.join(__dirname, 'test-api.html'));
});

app.use('/api', Userrouter);
app.use('/api', RecordRouter);
app.use('/api', DashboardRouter);

app.get('/', (req, res) => {
    res.send("<h1>Finance Backend is Running</h1><p>Visit <a href='/test'>/test</a> for API Explorer.</p>");
});

connectDb();
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});