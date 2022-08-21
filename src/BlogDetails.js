import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from './useFetch';
import ReactPaginate from "react-paginate";
import { ReactPaginateProps } from "react-paginate";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blogs, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();


    const handleclick =() => {
        fetch('http://localhost:8000/blogs/' + blogs.id, {
            method: 'DELETE'
        }).then(()=>{
            history.push('/');
        })
    }

    return (
        <div className="Blog-Details" > {isPending && <div>Fetching...</div>}   
           
             {error && <div>{error}</div>} 
                {blogs && (
                    <article>
                        <h2>
                            {blogs.title}
                        </h2>
                        <p>Written by  {blogs.author}</p>
                        <div>{blogs.body}</div>
                        <button onClick={handleclick}>
                            Delete
                        </button>
                    </article>
                )}
                <h2> Employee ID  {id}</h2> 
            </div> 
    );
                }


            export default BlogDetails;
    