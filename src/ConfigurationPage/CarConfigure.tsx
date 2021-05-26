import React, { useEffect, useState } from 'react';
import { useParams ,useHistory} from 'react-router-dom';
import Button from '../Components/Button';
import RedCar from '../Images/red.png';
import WhiteCar from '../Images/white.png';
import './CarConfigure.css';

interface Config {
    displayName: string,
    model: string,
    paints: [],
    selfDriving: any,
    variants: [],
    wheels: []
}
interface Paint {
    name: 'string',
    price: number,
    default: boolean,
    src: string
}

const CarConfigure: React.FC = () => {

    const [data, setData] = useState<Config | undefined>();
    const [variant, setVariant] = useState('');
    const { id } = useParams<{ id: string }>();
    const [loading, setLoading] = useState(false);
    const [selectedPaint, setSelectedPaint] = useState<Paint | undefined>();
    const [defaultImg,setDefaultImg] = useState<any>();
    const [selectedWheels, setSelectedWheels] = useState<Paint | undefined>();
    const [selfClass,setSelfClass] = useState(false);
    const history = useHistory();

    useEffect(() => {
        setLoading(true);
        fetch(`https://tesla-app-server.herokuapp.com/models/${id}/configure`)
            .then((res) =>
            { 
                if (!res.ok) {
                    throw new Error(res.statusText);
                 }
               return res.json()
            })
            .then((data) => {
                setData(data)
                // Setting Default Variant
                setVariant(data.variants[0].variant)
                data.paints.map((item: Paint) => {
                    if (item.default) {
                        setSelectedPaint(item);
                        setDefaultImg(WhiteCar)
                        return 0;
                    }
                    return 0;
                })
                data.wheels.map((item: Paint) => {
                    if (item.default) {
                        setSelectedWheels(item);
                        return 0;
                    }
                    return 0;
                })
                setLoading(false)
            }).catch(err => {
                setLoading(false)
                history.push('/error');
                
            })
    }, [id,history])
    const handleChange = (item: any) => {
        setSelectedPaint(item);
        setDefaultImg(item.name === 'Pearl White' ? WhiteCar: RedCar)
    }
    const handleWheels = (item: any) => {
        setSelectedWheels(item);
    }
    const toggleAdd = ()=>{
        setSelfClass(!selfClass)
    }
    const handleOrderSubmit = ()=>{
        history.push(`/all-models/${id}/orderComplete`)
    }
    const modelConfigBody = () => {
        return (<div className="configureContainer">

            <section className='displayImg'>
                <img  src={defaultImg} height={'500px'} width={'100%'} alt={'cAR'}/>
            </section>
            <aside className="configCon">
                <section className="accSection">
                    <h4>{data?.displayName}</h4>
                    {
                        data?.variants.filter((item: any) => variant === item.variant).map((item: any, id = 0) => {
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
                </section>
                <section className="buttonsSection">

                    {
                        data?.variants.map((item: any, id = 0) => {
                            return (
                                <Button key={id} text={item.variantName + "   $"+  item.price}  className={'configBtn'} onClick={() => setVariant(item.variant)} />
                            )
                        })
                    }

                </section>
                <section className="paintSection">
                    <h4 className="sectionHeading">Paints</h4>
                    <div className="paintSelection">
                        {
                            data?.paints.map((item: Paint, id = 0) => {
                                return (<div key={id} className={`paint ${item.name.split(" ")[1]}`} onClick={() => handleChange(item)}>
                                   
                                </div>)
                            })
                        }
                    </div>
                    <div className="paintDetails">
                        <p>{selectedPaint?.name + ' Multi-Coat'}</p>
                        <p>{selectedPaint?.price === 0 ? 'Included' :
                            '$ ' + selectedPaint?.price}</p>
                    </div>
                </section>

                
                <section className="paintSection">
                    <h4 className="sectionHeading">Wheels</h4>
                    <div className="paintSelection">
                        {
                            data?.wheels.map((item: Paint, id = 0) => {
                                return (<div key={id}>
                                    <img src={item.src}
                                        className="wheelsImg"
                                        alt={item.name}
                                        onClick={() => handleWheels(item)} />
                                </div>)
                            })
                        }
                    </div>
                    <div className="paintDetails">
                        <p>{selectedWheels?.name}</p>
                        <p>{selectedWheels?.price === 0 ? 'Included' :
                            '$ ' + selectedWheels?.price}</p>
                    </div>
                </section>



                <section className="paintSection">
                    <h4 className="sectionHeading">Interiors</h4>
                    <div className="paintSelection">
                        {
                            data?.paints.map((item: Paint, id = 0) => {
                                return (<div key={id} id={item.name.split(" ")[1]} className={'paint'} onClick={() => handleChange(item)}>
                                </div>)
                            })
                        }
                    </div>
                    <div className="paintDetails">
                        <p>All Black Decor</p>
                        <p>{selectedPaint?.price === 0 ? 'Included' :
                            '$ ' + selectedPaint?.price}</p>
                    </div>
                </section>
                
                <section className={'selfDrivingSection'}>
                    <div className="fullTextSection">
                        <h1 className="ftext">Full Self-Driving Capabilities</h1>
                        <div className="pDiv">
                            <p className="ctext">
                            Navigate on Autopilot Auto Lane Change Autopark Summon Full Self-Driving Computer Traffic Light and Stop Sign Control
                            </p>                        
                        </div>
                        <Button text={`${!selfClass?'Add':'Remove'}`} className={`${selfClass?'removeBtn':'addBtn'}`} onClick={toggleAdd}/>
                    </div>
                </section>

              
                <section className='paintSection'>
                <h4 className="sectionHeading">Order Your {data?.displayName}</h4>
                <p className="orderText">Estimated Delivery: 6-8 Weeks</p>
                <Button text="Order" className="configOrderBtn" onClick={handleOrderSubmit}/>

                </section>

            </aside>
        </div>)
    }
    return (<main>

        {
            data && data.variants.length > 0 ? modelConfigBody() : <div> Error</div>
        }



    </main>)
}
export default CarConfigure;