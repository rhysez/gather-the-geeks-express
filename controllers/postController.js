import pool from "../db.js";

let posts = [
    {
        id: 1,
        title: "Some title",
        content: "Some content",
        author: "Jim Dobbins", // user id goes here
        likes: 32,
    },
    {
        id: 2,
        title: "Some title",
        content: "Some content",
        author: "Jim Dobbins", // user id goes here
        likes: 32,
    },
    {
        id: 3,
        title: "Some title",
        content: "Some content",
        author: "Jim Dobbins", // user id goes here
        likes: 32,
    },
]
// @desc    Get many posts.
export const getPosts = async (req, res) => {
    try {
        const data = await pool.query('SELECT * FROM posts')
        const limit = req.query.limit || 30;
        if (!isNaN(limit) && limit > 0) {
            return res.status(200).json(data.rows.slice(0, limit));
        }

        return res.status(200).json(data.rows);
    } catch (err) {
        console.log(err)
        res.status(500).json({msg: "Internal Server Error"})
    }
}
// @desc    Get one post.
export const getPost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);
    if (!post) {
        const error = new Error(`The post with id ${id} was not found`);
        error.status = 404;
        return next(error)
    }
    return res.status(200).json(post);
}
// @desc    Create a post.
export const createPost = async (req, res) => {
    const newPost = {
        id: posts.length + 1,
        title: "Some title",
        content: "Some content",
        author: "Jim Dobbins",
        likes: 32,
    }

    if (!newPost.title || !newPost.content) {
        const error = new Error(`The post must contain a title and content.`);
        error.status = 400;
        return next(error)
    }

    try {
        await pool.query(
            'INSERT INTO posts (title, content, author, likes) VALUES ($1, $2, $3, $4)',
            [newPost.title, newPost.content, newPost.author, newPost.likes]
        )
        res.status(201).json({msg: "Successfully created post"});
    } catch(err) {
        console.log(err);
        return res.status(400).json({msg: err.message});
    }

    return res.status(201).json(posts);
}
// @desc    Update a post.
export const updatePost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);
    if (!post) {
        const error = new Error(`The post with id ${id} was not found`);
        error.status = 404;
        return next(error)
    }

    post.title = req.body.title;
    post.content = req.body.content;
    post.likes = req.body.likes;
    return res.status(200).json(posts);
}
// @desc    Delete a post.
export const deletePost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);
    if (!post) {
        const error = new Error(`The post with id ${id} was not found`);
        error.status = 404;
        return next(error)
    }

    posts = posts.filter(post => post.id !== id);
    return res.status(200).json(posts);
}