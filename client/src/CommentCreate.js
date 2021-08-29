import axios from 'axios';
import React,{useState} from 'react'

export default function CommentCreate({postId}) {
    const [content, setcontent] = useState('')

    const formSubmit = async(e)=>{
        e.preventDefault();
        await axios.post(`http://localhost:4001/posts/${postId}/comment`,{content});
        setcontent('');
    }
    return (
        <div>
            <form onSubmit={formSubmit}>
                <div className="form-group">
                    <label>Add Comment</label>
                    <input className="form-control" value={content} onChange={e=>setcontent(e.target.value) }/>
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
