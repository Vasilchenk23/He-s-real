import React from 'react';
import { Link } from 'react-router-dom';
import '../../src/App.css';



const Header = () => {
  return (
    <>
      <div className="header">
        <div className="members">
         <Link to="/women" style={{ textDecoration: 'none' }}>
              <div className="women">Корм</div>
         </Link> 
          <Link to="/men" style={{ textDecoration: 'none' }}>
              <div className="men">Іграшки</div>
          </Link>
          <Link to="/kids" style={{ textDecoration: 'none' }}>
              <div className="teen">Догляд</div>
          </Link>
        </div>
        <div className='logoBlock'>
        <Link to="/logo" style={{ textDecoration: 'none' }}>
            <div className="logo" >He's real!</div>
        </Link>
        </div>
        <div className="setting">
          <Link to="/login" className="userImage">
            <img src="/User.svg" alt="" />
          </Link>
          <div className="likesImageUser"><img src="/heart.svg" alt="" /></div>     
          <div className="basketImage"><img src="/shoppingBag.svg" alt="" /></div>
        </div>
      </div>
    </>
  );
};

export default Header;
