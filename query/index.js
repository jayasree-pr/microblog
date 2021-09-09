const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {}    

const handleEvent = (type,data)=>{

    if(type === 'postCreated'){
        const {id,title} = data;

        posts[id] = {id,title,comment:[]}
    }
    
    if(type === 'CommentCreated'){
        
        const {id,content,postId,status} = data;
        const post = posts[postId];
        post.comment.push({id,content,status});
}

if(type === 'CommentUpdated'){
        
    const {id,content,postId,status} = data;
    console.log(status);
    const post = posts[postId];
    console.log(id); 
   
    const comments = post.comment.find(comm=>{
        return comm.id===id
        });
    console.log(comments);

    comments.status = status;
    comments.content = content;
}

}

app.get('/posts',(req,res)=>{
    res.send(posts);
})

app.post('/events',(req,res)=>{
    const {type,data} = req.body;

    handleEvent(type,data);

res.send({});
})

app.listen(4002,async ()=>{
    console.log("Listening to 4002..");

   const res= await axios.get('http://localhost:4005/events')
   for(let event of res.data){
       console.log('processing event',event.type);

       handleEvent(event.type,event.data);
   }
})
