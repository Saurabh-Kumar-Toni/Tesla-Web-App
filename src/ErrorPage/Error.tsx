import React from 'react';
import '../ErrorPage/Error.css';

const Error: React.FC = () => {

    return (
        <div className="error">
            <h3>OOPS!! Looks Like this page doesn't exists</h3>

            <h5>Why don't you try to explore our Home Page</h5>
        </div>
    )
}

export default Error;