 import { useState,useEffect } from "react";
 import BlogList from "./BlogList";
import useFetch from "./useFetch";
 const Home = () => {
  const { data, Error} =useFetch('http://localhost:8000/blog');
    
   //const [name, setName] =  useState('i will be changed');
   ///const [age, setage] = useState('22');

 
   const [blogs, setBlogs] = useState([]);
   const [isPending, setIsPending] = useState(true);
   const [error, setError] = useState(null);
   
  
   const handleDelete = (id) => {
        const newBlogs = blogs.filter(blogs => blogs.id !==id);
        setBlogs(newBlogs);} 

useEffect(()=>{
    setTimeout(()=> {
      
       fetch('http://localhost:8000/blogs')
   .then(res => {
      console.log(res);
      if(!res.ok) {
        throw Error('SORRY, BLOGS CAN NOT FETCH FROM JSON-SERVER');
      }
        return res.json();
   })
    .then(data =>{
      console.log("Blog Data => ", data);
        setBlogs(data);
        setIsPending(false);
        setError(null);
  })
  .catch(err=>{
   setError(err.message);
  })
    },2000);
    

    
},[]);

   //const click = () => {
     //   setName('As i said  .....');
       // setage('23');
       // setBlogs(blogs);
        
   // }
    
    return ( 
        <div className="home">
            {error && <div>{error}</div> }
            { isPending && <div>Loading Blogs...</div> }
            
           <BlogList blogs={blogs} title= "Enjoy Reading Blogs:) Tell us about your Blog in New Blog!" handleDelete={handleDelete} />
            

            </div>
     );
}
 
export default Home;