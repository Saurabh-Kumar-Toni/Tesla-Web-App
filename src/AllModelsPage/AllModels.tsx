import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';
import './AllModels.css'

const AllModels:React.FC = () => {

    const [modelData, setModelData] = useState([]);
    useEffect(() => {
        fetch('https://tesla-app-server.herokuapp.com/models/all')
        .then((res) => {
            return res.json();
        }).then((data) => setModelData(data.elements))
    },[])

    const renderModelBody = () => {
        const list = modelData.map(({displayName,model,topSpeed,range,peakPower,acceleration, AWD}, id=0) => {
            return(
                <div key={id}>
                    <Card
                        displayName={displayName}
                        model={model}
                        topSpeed={topSpeed}
                        range={range}
                        peakPower={peakPower}
                        acceleration={acceleration}
                        AWD={AWD}
                    />
                </div>
            )
        })
        return list;
    }

    return (
        <div className="AllCarContainer">
            <div className={'cardlist'}>
            {modelData.length> 0 ? renderModelBody():""}
            </div>
        </div>
    )
}

export default AllModels;