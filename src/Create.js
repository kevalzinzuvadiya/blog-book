import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import { useState } from "react";
const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Zarna');   
    const [isPending, setIsPending] = useState(false);

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog ={ title, body, author};

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then (()=>{
            console.log ('Blog Added');
            setIsPending(false);
            //history.go(-1);
            history.push('/')
        })
        

    }


    return (
        <div className="Create">
            
            <form  onSubmit={handleSubmit }>
                <label> Blog Title:</label>
                <input type="text"
                    required
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                />

                <label> Blog Body:</label>
                <textarea
                    required value={body}
                    onChange={(e)=>setBody(e.target.value)}>
                </textarea>
                <label> Blog author:</label>
                <select value={author}
                onChange={(e)=> setAuthor(e.target.value)}
                > 
                    <option value="Zarna">Zarna</option>
                    <option value="Keval">Keval</option>
                    <option value="Khushali">Khushali</option>
                    <option value="Bhautik">Bhautik</option>
                    <option value="Akshatha">Akshatha</option>
                    <option value="Vaishnavi">Vaishnavi</option>
                    <option value="Shruti">Shruti</option>
                    <option value="Rutvvy">Rutvvy</option>
                   
                </select>  
                {!isPending && <button>Add Blog</button> }
                {isPending && <button disabled>Adding Blog...</button> }
                
            </form>


        </div>
    );

}
export default Create;