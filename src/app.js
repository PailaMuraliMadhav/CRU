// src/app.js
import express from 'express';
import TodoRoutes from './routes/Todoroutes.js';

const app = express();

app.use(express.json());
app.use('/api/v1/todos', TodoRoutes);
app.get('/', (req, res) => res.send('API is running 🚀'));

export default app;
