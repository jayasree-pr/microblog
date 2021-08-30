import React,{useState,useEffect} from 'react'
import axios from 'axios';
import CommentCreate from './CommentCreate';

export default function Commentlist({comment}) {

    const renderedComment = Object.values(comment).map(comment=>{
        
        return (
        <li key={comment.id}>{comment.content}</li>
        )
        })

    return <ul>{renderedComment}</ul>;      
    }
