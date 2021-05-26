import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../Images/Vector.png';

const Header:React.FC = () => {

    return(
        <div>
            <Link to="/">
            <div className="logo">
                    
            </div>
            </Link>
        </div>
    )
};

export default Header;