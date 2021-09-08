const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/events',async (req,res)=>{
    const {type,data} = req.body;

    if(type === 'CommentCreated'){
        const status = data.content.includes('kill') ? 'rejected' : 'approved';
        
    await axios.post('http://localhost:4005/events',{
        type : 'CommentModerated',
        data : {
            id : data.id,
            content:data.content,
            postId:data.postId,
            status
        }

});
}
res.send({});
});
app.listen(4003,()=>{
    console.log("Listening to 4003..");
})
