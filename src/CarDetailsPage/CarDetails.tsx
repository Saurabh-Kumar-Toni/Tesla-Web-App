import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Button from '../Components/Button';
import '../CarDetailsPage/CarDetails.css';
import CarSpecs from '../CarDetailsPage/CarSpecs'
import { Link } from 'react-router-dom';

const CarDetails:React.FC = () => {
    const[data, setData] = useState([]);
    const[model, setModel] = useState('');
    const[displayName, setDisplayName] = useState('');
    const[variant, setVariant] = useState('');
    
    const {id} = useParams<{id:string}>();
    // let selectedVariant:any;

    // const setSelectedVariant = (variant:any) => {
    //      setVariant(variant);
    //      selectedVariant = variant;
    //  }

    useEffect(() => {
        fetch(`https://tesla-app-server.herokuapp.com/models/${id}`)
        .then(res => res.json())
        .then(data => {
            setData(data.variants)
            setDisplayName(data.displayName)
            setModel(data.model)
            setVariant(data.variants[0].variant)
        })
    },[id])

    const renderCarDetails = () => {

        return(
            <div className="container">
                <div className="divsec1">
                {/* <section className="sec1"> */}
                    <h4>{displayName}</h4>
                    <Link to={`/all-models/${id}/configure`}>
                    <Button className="order" text="Order"  onClick={() => {console.log("Order Clicked")}}/>
                    </Link>
                {/* </section> */}
                </div>

                <div className="divsec2">
                {/* <section className="sec2"> */}
                    <div className="carImage" />
                    <div className="carDetailsBox">
                        <h4>{displayName} Specs</h4>
                        <div className="variant">
                            {
                                data.map(({variantName,variant},id=0) => {
                                    return(
                                        
                                        <Button text={variantName}  key={id} className="specBtn" 
                                        onClick ={() => setVariant(variant)} />
                                    )
                                })
                            }

                        </div>
                        <div className="carSpecs">
                            {
                                data.filter((item:any, id=0) => variant === item.variant).map((item:any,id=0) =>{
                                    return(
                                            <CarSpecs key={id} item={item} />
                                    )
                                })
                            }
                        </div>

                    </div>
                    

                {/* </section> */}
                </div>
            </div>
        )
    }

    return (
        <div className="renderCarDetails">
            
            {data.length> 0 ? renderCarDetails():""}
        </div>
    )
}

export default CarDetails;