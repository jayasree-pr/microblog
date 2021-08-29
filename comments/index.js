const express = require('express');
const {randomBytes} = require('crypto');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const commentByPost = {}
app.get('/posts/:id/comment',(req,res)=>{
    res.send(commentByPost[req.params.id]||[]);
})

app.post('/posts/:id/comment',(req,res)=>{
    const commentId = randomBytes(4).toString('hex');
    const {content} = req.body;

    const comment = commentByPost[req.params.id] || [];
    comment.push({id : commentId,content});

    commentByPost[req.params.id]=comment;
    res.status(201).send(comment);
})

app.listen(4001,()=>{
    console.log("Listening to 4001..");
})