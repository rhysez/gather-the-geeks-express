import express from 'express';
import pool from './db.js'
import posts from './routes/posts.js';
import errorHandler from './middleware/error.js';
import notFoundHandler from './middleware/notFound.js';

// express initialisation with port.
const app = express();
const port = process.env.PORT || 8000;

// route imports.
app.use('/api/posts', posts);

// middleware.
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(notFoundHandler);
app.use(errorHandler);

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/", (req, res) => {
    res.json({msg: "Gather The Geeks server is up"})
})

app.get("/setup", async (req, res) => {
    try {
        await pool.query(
            'CREATE TABLE posts( id SERIAL PRIMARY KEY, title VARCHAR(100), content LONGTEXT, likes INT(10), author VARCHAR(100) ))'
        )
        res.status(201).json({msg: "Successfully created TABLE"});
    } catch (err) {
        console.log(err)
        res.status(500).json({msg: "Internal Server Error"})
    }
})