import React,{useState,useEffect} from 'react'
import axios from 'axios';
import CommentCreate from './CommentCreate';

export default function Commentlist({comment}) {

    const renderedComment = Object.values(comment).map(comment=>{

        let content;

        if(comment.status === 'approved'){
            content=comment.content;
        }
        if(comment.status === 'rejected'){
            content="comment Rejected";
        }
        if(comment.status === 'pending'){
            content="Waiting for moderation";
        }
        
        return (
        <li key={comment.id}>{content}</li>
        )
        })

    return <ul>{renderedComment}</ul>;      
    }
