import { Link} from 'react-router-dom';
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import Create from "./Create";
import contact from "./Contact";
const Navbar = () => {
    return ( 
    <nav className="navbar">
        <h1> Blog Book</h1>
        <div className="links">
            <Link to="/" style={{
                color:"white", 
                backgroundColor: '#f1356d',
                borderRadius: '8px'
            }}>Home Page</Link>
            <Link to="/create" style={{
                color:"white", 
                backgroundColor: '#f1356d',
                borderRadius: '8px',
                
            }}>New Blog </Link>
           
            {/* <Link to="/contact" style={{
                color:"white", 
                backgroundColor: '#f1356d',
                borderRadius: '8px'
            }}>CONTACT US</Link> */}
            
        </div>
    </nav>
     );


}
 
export default Navbar;