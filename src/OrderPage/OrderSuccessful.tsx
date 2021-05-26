import React from 'react';
import RedCar from '../Images/red.png';
import CheckMark from '../Images/greentick.png';
import SuccessImage from '../Images/mouse.png';
import Button from '../Components/Button';
import './OrderSuccessful.css';
const displayName = 'Model S';
const variantData = [
    {
        acceleration: { speed: "0-60", time: 1.99 },
        range: '320',
        topSpeed: '250'
    }
]
const selectedVariant = [
    {
        variantName:'Plaid+',
        price:149990
    }
];
const selectedPaint =[
    {
        name:'Red',
        price:2500
    }
]
const selectedWheels=[
    {
        name:'Tempest 19” Wheels',
        price:0,
        src: "https://static-assets.tesla.com/share/tesla_design_studio_assets/MODEL3/UI/option-wheels-20-uberturbine.png?&version=v0028d202104080411"
    }
]
const selectedInteriors=[
    {
        name:'',
        price:0
    }
]

const selectedSelfDriving=[{
    default:true,
    price:10000
}]
const addSelfBool = true;

const totalPrice = selectedVariant[0].price+selectedPaint[0].price+
selectedWheels[0].price+selectedInteriors[0].price+selectedSelfDriving[0].price;

const OrderSuccessful: React.FC = () => {
    return (<main className="orderContainer">
        <section className="orderCompleteSection">
            <img src={CheckMark} height={'52px'} width={'52px'} alt="done img" />
            <h1 className="text1">Your Order is Complete</h1>
        </section>
        <section>
            <img src={SuccessImage} height={'323px'} width={'306px'} alt='success img' />
        </section>

        <section className="summarySection" style={{ width: '375px' }}>

            <div className='accSection'>
                <h4 className='text2'>{displayName}</h4>
                {
                    variantData?.map((item: any, id = 0) => {
                        return (<div className="accDetails" key={id}>
                            <div className="accItem">
                                <p>{item.range + ' mi'}</p>
                                <p>Est Range</p>
                            </div>
                            <div className="accItem">
                                <p>{item.topSpeed + ' mph'}</p>
                                <p>Top Speed</p>
                            </div>
                            <div className="accItem">
                                <p>{item.acceleration.time}</p>
                                <p>{item.acceleration.speed}</p>
                            </div>


                        </div>)
                    })
                }
            </div>
            <div>
                <img src={RedCar} width="100%" />
            </div>
            <div className="buttonsSection">
        

                    {
                        selectedVariant.map((item: any, id = 0) => {
                            return (
                                <Button key={id} text={item.variantName + "\t $" + item.price} className={'configBtn'} onClick={() =>{}} />
                            )
                        })
                    }
            </div>
        </section>

        <section className="featuresSection"> 

                    <div className="featuresItem">
                        <div className="accItem">
                        <p>{selectedPaint[0]?.name + ' Multi-Coat'}</p>
                        <p>{selectedPaint[0]?.price === 0 ? 'Included' :
                            '$ ' + selectedPaint[0]?.price}</p>
                        </div>
                        <div className={`paint ${selectedPaint[0].name.split(" ")[0]}`}  />
                    </div>
                    <div className="featuresItem">
                        <div className="accItem">
                        <p>{selectedWheels[0]?.name}</p>
                        <p>{selectedWheels[0]?.price === 0 ? 'Included' :
                            '$ ' + selectedPaint[0]?.price}</p>
                        </div>
                        <div>
                        <img src={selectedWheels[0].src}
                                        className="wheelsImg"
                                        alt={selectedWheels[0].name}
                                        onClick={() =>{}} />
                            </div>
                    </div>
                    <div className="featuresItem">
                        <div className="accItem">
                        <p>{selectedInteriors[0]?.name ===''?'All Black Decor':selectedInteriors[0].name}</p>
                        <p>{selectedInteriors[0]?.price === 0 ? 'Included' :
                            '$ ' + selectedInteriors[0]?.price}</p>
                        </div>
                        <div id={selectedPaint[0].name.split(" ")[0]} className={`paint`}  />
                      
                    </div>
                    {
                        addSelfBool?
                        <div className="featuresItem">
                             <div className="accItem">
                                 <p>Full self-driving capabilities</p>
                                 <p>$ {selectedSelfDriving[0].price}</p>
                             </div>   
                        </div>:''
                    }

        </section>
        {/* Price Section */}
        <section className="footerSection">
            <Button text={'$ ' + totalPrice.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} 
            onClick={()=>{}}
            className="configOrderBtn bg-light"/>

            <div className="buttonContainer" >
            <Button text={'Explore Model S'} 
            onClick={()=>{}}
            className="configOrderBtn"/>
              <Button text={'Download Invoice'} 
            onClick={()=>{}}
            className="configOrderBtn bg-dark"/>
            </div>
        </section>


    </main>)
}
export default OrderSuccessful;