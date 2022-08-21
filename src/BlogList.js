// const BlogList = (props) => {
    

import { Link } from "react-router-dom/cjs/react-router-dom.min";

    const BlogList = ({blogs, title, handleDelete}) =>{
 

        return ( 
            <div className="blog-list">
            <h2>{title}</h2>
                {blogs.map((blogs)=> (
                    <div className="blog-preview" key={blogs.id}>
                    <Link to={`/blogs/${blogs.id}`}>
                    <h2>
                        { blogs.title}
                    </h2>
                    <p> selected Author as {blogs.author} </p>
                    <p> working as.. {blogs.body}</p>
                    </Link>
                    
                    <button onClick={()=> handleDelete(blogs.id)}>Remove</button>
                    
                    </div>
    
    
                ))}
            </div>
         );
    }
   // }

    //const home = props.home;
    //const blogs = props.blogs;
   // const title = props.title;
    //console.log(props,blogs);
    //const blog = () =>{
        
    
//}
// }
 
export default BlogList;