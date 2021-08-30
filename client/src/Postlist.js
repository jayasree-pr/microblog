import React,{useState,useEffect} from 'react'
import axios from 'axios';
import CommentCreate from './CommentCreate';
import Commentlist from './Commentlist';

export default function Postlist() {

    const [posts,setPosts] = useState([])
    const fetchPost = async ()=>{
    const res = await axios.get('http://localhost:4002/posts');
    setPosts(res.data);
    };
    useEffect(() => {
        fetchPost();
    }, [])
    const renderedPost = Object.values(posts).map(post=>{
        
        return (
        <div className="card" style={{width : '20%', marginBottom:'20px'}} key={post.id}>
        
        <div className="card-body">
            <h3>{post.title}</h3>
            <Commentlist comment ={post.comment}/>
            <CommentCreate postId={post.id} />
        </div>
        </div>
        )
        
    })
    return(
        <div className="d-flex flex-row flex-wrap justify-content-between">
            {renderedPost}
        </div>
    )
        
}
