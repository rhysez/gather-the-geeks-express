import express from 'express';
import blogPosts from './routes/blogPosts.js';
import errorHandler from './middleware/error.js';

// express initialisation with port.
const app = express();
const port = process.env.PORT || 8000;

// route imports.
app.use('/api/posts', blogPosts);

// middleware.
app.use(express.json()) // allows parsing of incoming json in request body
app.use(express.urlencoded({ extended: false }))
app.use(errorHandler);

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/", (req, res) => {
    res.json({msg: "Gather The Geeks server is up"})
})