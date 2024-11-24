import express from 'express';
import posts from './routes/posts.js';
import errorHandler from './middleware/error.js';
import notFoundHandler from './middleware/notFound.js';

// express initialisation with port.
const app = express();
const port = process.env.PORT || 8000;

// route imports.
app.use('/api/posts', posts);
app.use('/', (req, res) => {
    res.status(200).json({msg: "Server up"})
})

// middleware.
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(notFoundHandler);
app.use(errorHandler);

app.listen(port, () => console.log(`Listening on port ${port}`));
