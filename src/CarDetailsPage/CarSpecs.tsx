import React from 'react';

interface props{
    item:any;
}

const CarSpecs:React.FC<props> = ({item}) => {
    return(
        <div className="specsConatiner">
            <div className="column1">
                <div className="specs">
                    <p>Range</p>
                    <p>{item.range} mi</p>
                </div>
                <div className="specs">
                    <p>Peak Power</p>
                    <p>{item.peakPower}</p>
                </div>
                <div className="specs">
                    <p>Top Speed</p>
                    <p>{item.topSpeed}</p>
                </div>
                <div className="specs">
                    <p>Weight</p>
                    <p>{item.weight}</p>
                </div>
                <div className="specs">
                    <p>Cargo Capacity</p>
                    <p>{item.cargo}</p>
                </div>
            </div>
            <div className="column2">
            <div className="specs">
                    <p>Power Train</p>
                    <p>{item.powertrain} mi</p>
                </div>
                <div className="specs">
                    <p>Acceleration</p>
                    <p>{item.acceleration ? item.acceleration.time + 's ' : '3.39s '} 
                    {item.acceleration ? item.acceleration.speed : '0-100'}
                     </p>
                </div>
                <div className="specs">
                    <p>Drag Coefficient</p>
                    <p>{item.dragCoefficient}</p>
                </div>
                <div className="specs">
                    <p>Wheels</p>
                    <p>{item.wheels[0] + '" or '} {item.wheels[1] +'"'}</p>
                </div>
                <div className="specs">
                    <p>Charging</p>
                    <p>{item.superchargingMax}</p>
                </div>

            </div>

        </div>
    )
}

export default CarSpecs;