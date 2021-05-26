import React from 'react';
import './Home.css';
import backgroundImage from '../Images/landing.png';
import { Link } from 'react-router-dom';
import Button from '../../Components/Button';
import Header from '../../Components/Header'; 


const Home: React.FC = () => {

    // const handleClick = (e:MouseEvent) => {

    // }

    return(
        
        <div className="home" >
            
            {/* <div className="logodiv">
            <Header/>
            </div> */}
            <div className="landingPage">
             {/* <img src={backgroundImage} /> */}
            <Link to="/all-models"> 
            <Button className="btn" text="All Cars"  onClick={()=>{console.log("Button Clicked")}}/>
            </Link>
            </div>
        </div>
    )
};

export default Home;