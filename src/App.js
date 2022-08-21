import logo from './logo.svg';
//import './App.css';
import React from 'react';
import Navbar from './navbar';
import Home from './home';
import BlogList from './BlogList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import Contact from './Contact';
import BlogDetails from './BlogDetails';


function App() {
  

  const link = "https://www.wikipedia.com";
  
  return (
    
    <Router>
      <div className="App">
        <Navbar />
        <div className='Content'></div>
        <Switch>
        <Route exact path="/">
        <Home/> 
        </Route> 

        <Route exact path="/Create">
        <Create/> 
        </Route> 

        {/* <Route exact path="/Contact">
          <Contact/>
        </Route> */}
        
        

        <Route exact path="/blogs/:id">
        <BlogDetails />
        {/* <Create/>  */}
        </Route> 
        </Switch>


        

        
        <a style={{

          color: '#025091'
        }} href={link}>Find More Related</a>


      </div>
    </Router>
  );
}

export default App;
