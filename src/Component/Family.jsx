import React from 'react';
import { Link } from 'react-router-dom';
import '../../src/App.css';

const Family = () => {
    return (
        <>
            <div className="blockFamily">
                <Link to="/women">
                    <div className="blockCard">
                        <img src="/Women.jpg" alt="" />
                    </div>
                </Link>

                <Link to="/men">
                    <div className="blockCard">
                        <img src="/Men.jpg" alt="" />
                    </div>
                </Link>

                <Link to="/kids">
                    <div className="blockCard">
                        <img src="/Teen.jpg" alt="" />
                    </div>
                </Link>
            </div>
        </>
    );
}

export default Family;
