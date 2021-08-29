import React,{useState} from 'react';
import axios from 'axios';

export default function PostCreate() {
    const [title,setTitle] = useState('');

    const formSubmit=async (e)=>{
        e.preventDefault();
        console.log(title);
        const res = await axios.post("http://localhost:4000/posts",{title});
        console.log(res.data);
        setTitle('');
    }
    return (
        <div >
            <form onSubmit={formSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input className="form-control" value={title} onChange={e=>setTitle(e.target.value) }/>
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
