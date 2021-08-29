const express = require('express');
const {randomBytes} = require('crypto');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const commentByPost = {}
app.get('/posts/:id/comment',(req,res)=>{
    res.send(commentByPost[req.params.id]||[]);
})

app.post('/posts/:id/comment',async (req,res)=>{
    const commentId = randomBytes(4).toString('hex');
    const {content} = req.body;

    const comment = commentByPost[req.params.id] || [];
    comment.push({id : commentId,content});

    commentByPost[req.params.id]=comment;

    await axios.post('http://localhost:4005/events',{
        type : 'CommentCreated',
        data : {
            id : commentId,
            content,
            postId:req.params.id
        }
    })
    res.status(201).send(comment);
})

app.post('/events',(req,res)=>{
    console.log("Event received",req.body.type)
    res.send({});
})

app.listen(4001,()=>{
    console.log("Listening to 4001..");
})