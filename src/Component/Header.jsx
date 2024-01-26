import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="members">
         <Link to="/women" style={{ textDecoration: 'none' }}>
              <div className="women">Она</div>
         </Link> 
          <Link to="/men" style={{ textDecoration: 'none' }}>
              <div className="men">Он</div>
          </Link>
          <Link to="/kids" style={{ textDecoration: 'none' }}>
              <div className="teen">Дети</div>
          </Link>
        </div>
        <Link to="/logo" style={{ textDecoration: 'none' }}>
            <div className="logo">VAR404</div>
        </Link>
        <div className="setting">
          <Link to="/login" className="userImage">
            <img src="/User.svg" alt="" />
          </Link>
          <div className="likesImageUser"><img src="/heart.svg" alt="" /></div>
          <Link to="/basket">
          <div className="basketImage"><img src="/shoppingBag.svg" alt="" /></div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
