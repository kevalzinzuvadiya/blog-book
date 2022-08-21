import {useState, useEffect} from 'react';

const useFetch = (url) => {
    
    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    
   
   
    useEffect(()=>{
      const abortConst = new AbortController();
        setTimeout(()=> {
           fetch(url,{signal:abortConst.signal})
       .then(res => {
          console.log(res);
          if(!res.ok) {
            throw Error('Blogs is not Fetching');
          }
            return res.json();
       })
        .then(data =>{
          console.log("Blog Data => ", data);
            setData(data);
            setIsPending(false);
            setError(null);
      })
      .catch(err=>{
       setError(err.message);
      })
        },2000);
        
    return ()=> abortConst. abort();
        
    },[url]);
    return { data, isPending, error}
}
export  default useFetch;   