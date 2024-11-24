import express from 'express';
import blogPosts from './routes/blogPosts.js';
import errorHandler from './middleware/error.js';
import notFoundHandler from './middleware/notFound.js';

// express initialisation with port.
const app = express();
const port = process.env.PORT || 8000;

// route imports.
app.use('/api/posts', blogPosts);

// middleware.
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(notFoundHandler);
app.use(errorHandler);

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/", (req, res) => {
    res.json({msg: "Gather The Geeks server is up"})
})