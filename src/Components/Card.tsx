import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'

interface cardProp{

    displayName: string,
    model: string,
    peakPower: number,
    range: number,
    topSpeed: number,
    acceleration: any,
    AWD: string
}

const Card:React.FC<cardProp> = ({displayName,model,peakPower, range, topSpeed, acceleration, AWD}) => 
{
    return (
        <div className="card">
            <Link to={`/all-models/${model}`}>
            <div className={`${model} commonImg`}></div>
            </Link>

            <div className="heading">
                <h4>{displayName}</h4>
                <p>{range ? range + 'mi' : '900 mi'} </p>
            </div>
            <div className="carDesc">
                <div className="carDetails">
                    <p>{acceleration ? acceleration.time + 's' : '3.39s'}</p>
                    <p>{acceleration ? acceleration.speed : '0-100'}</p>
                </div>
                <div className="carDetails">
                    <p>{topSpeed ? topSpeed + 'Mph' : '0-100 Mph'}</p>
                    <p>Top Speed</p>
                </div>
                <div className="carDetails">
                    <p>{peakPower ? peakPower + 'HP' : '1000 HP'}</p>
                    <p>Peak Power</p>
                </div>

                <div className="carDetails">
                    <p>$78498</p>
                    <p>Starts</p>
                </div>
            </div>

        </div>
    )
}

export default Card;
