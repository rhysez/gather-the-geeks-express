import express from 'express';
const router = express.Router();

const posts = [
    {
        id: 1,
        title: "Some title",
        content: "Some content",
        author: "Jim Dobbins",
        timestamp: "13:52 16th Nov 2024"
    },
    {
        id: 2,
        title: "Some title",
        content: "Some content",
        author: "Jim Dobbins",
        timestamp: "13:52 16th Nov 2024"
    },
    {
        id: 3,
        title: "Some title",
        content: "Some content",
        author: "Jim Dobbins",
        timestamp: "13:52 16th Nov 2024"
    },
    {
        id: 4,
        title: "Some title",
        content: "Some content",
        author: "Jim Dobbins",
        timestamp: "13:52 16th Nov 2024"
    }
]

router.get('/', (req, res) => {
    const limit = req.query.limit || 30;

    if (!isNaN(limit) && limit > 0) {
        return res.status(200).json(posts.slice(0, limit));
    }
})

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);
    if (!post) {
        return res.status(404).json({msg: `A post with id ${id} was not found`});
    }
    return res.status(200).json(post);
})

export default router;