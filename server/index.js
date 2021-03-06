import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

// npm run serve

const app = express();
dotenv.config();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());
const mongodb = 'mongodb+srv://admin:admin123@cluster0.dsbkl.mongodb.net/todos-database?retryWrites=true&w=majority';
app.get('/', (req, res) => {
res.send('Welcome to server')
})
const PORT = process.env.PORT || 5000;
mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server running on ${PORT} `)))
.catch((error) => console.log(error));