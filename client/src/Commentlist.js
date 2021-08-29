import React,{useState,useEffect} from 'react'
import axios from 'axios';
import CommentCreate from './CommentCreate';

export default function Commentlist({postId}) {

    const [comment,setComment] = useState([]);
    const fetchPost = async ()=>{
    const res = await axios.get(`http://localhost:4001/posts/${postId}/comment`);
    setComment(res.data);
    };
    useEffect(() => {
        fetchPost();
    }, []);
    const renderedComment = Object.values(comment).map(comment=>{
        
        return (
        <li key={comment.id}>{comment.content}</li>
        )
        })

    return <ul>{renderedComment}</ul>;      
    }
