import express from 'express';
import posts from './routes/posts.js';
import errorHandler from './middleware/error.js';
import notFoundHandler from './middleware/notFound.js';
import pool from "./database/db.js";

// express initialisation with port.
const app = express();
const port = process.env.PORT || 8080;

// route imports.
app.use('/api/posts', posts);

app.get('/', (req, res) => {
    res.status(200).json({msg: "Server up"})
})

// TODO: Use a script for this.
app.get('/setup', async (req, res) => {
    try {
        await pool.query('CREATE TABLE posts( id SERIAL PRIMARY KEY, title VARCHAR(100), content TEXT, likes INT, author VARCHAR(100))')
        res.status(200).json({msg: "Successfully created TABLE posts"});
    } catch(err) {
        console.log(err)
        res.status(500).json({msg: err.message});
    }
})

// middleware.
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(notFoundHandler);
app.use(errorHandler);

app.listen(port, () => console.log(`Listening on port ${port}`));
