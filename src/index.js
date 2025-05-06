import express from 'express';
import rootRoutes from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', rootRoutes);

app.get('/api', (req, res) => {
    res.send("Welcome to the API");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});