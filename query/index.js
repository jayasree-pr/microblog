const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {}

app.get('/posts',(req,res)=>{
    res.send(posts);
})

app.post('/events',(req,res)=>{
    const {type,data} = req.body;

    if(type === 'postCreated'){
        const {id,title} = data;

        posts[id] = {id,title,comment:[]}
    }
    
    if(type === 'CommentCreated'){
        
        const {id,content,postId,status} = data;
        const post = posts[postId];
        post.comment.push([id,content,status]);
}

if(type === 'CommentUpdated'){
        
    const {id,content,postId,status} = data;
    console.log(status);
    const post = posts[postId];
    const comments = post.comment.find(comment=>{return comment.id===id})

    comments.status = status;
    comments.content = content;
}
res.send({});
})

app.listen(4002,()=>{
    console.log("Listening to 4002..");
})