// Create web server
// 1. Create a web server
// 2. Handle GET request
// 3. Handle POST request
// 4. Handle PUT request
// 5. Handle DELETE request

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const comments = require('./comments');

app.use(bodyParser.json());

// GET /comments
app.get('/comments', (req, res) => {
    res.send(comments);
});

// POST /comments
app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.send(comment);
});

// PUT /comments
app.put('/comments/:id', (req, res) => {
    const id = req.params.id;
    const newComment = req.body;
    comments[id] = newComment;
    res.send(newComment);
});

// DELETE /comments
app.delete('/comments/:id', (req, res) => {
    const id = req.params.id;
    comments.splice(id, 1);
    res.send(comments);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});