import React from 'react';
import { Link } from 'react-router-dom';
const Family = () => {
    return(
        <>
        <div className="blockFamily">
            <Link to="/women">
                    <div className="blockWomen">
                        <img src="/Women.png" alt="" />
                    </div>
            </Link>

            <Link to="/men">
                    <div className="blockMen">
                        <img src="/Men.png" alt="" />
                    </div>
            </Link>

            <Link to="/kids">
                    <div className="blockTeen">
                        <img src="/Teen.png" alt="" />
                    </div>
            </Link>
        </div>
        </>
    );
}

export default Family