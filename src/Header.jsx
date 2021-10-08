import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    
 <>
  <div id="navbar">
      <div className="logo">
        <h3>Shoping Cart</h3>
      </div>
      <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/service">Products</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        

      </ul>
      <div className="rightCart">
        <img src={process.env.PUBLIC_URL+'/cart2.png'}/>
      </div>
  </div>

  </>
  );
}

export default Header;
