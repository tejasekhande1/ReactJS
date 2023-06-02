import './Car.css'
import React,{useState} from 'react';

function Car(props){
    const [model,setModel] = useState(props.name);
    const [imgC,setImgC] = useState(props.imgCar);
    function MyHandler(){
        alert("You'r Gonna For Change Model : ")
        setModel("Maruti");
        setImgC("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDhjoGalewMhxoeNt-I7pA5kF-aSy8ppTGdnRXyFuf2nualZkpjSCgICfBsxZzvYa1qF4&usqp=CAU");
    }
    return(
        <div className="container">
            <div className="car">
                <img src={imgC}></img>
                <h2> {model} </h2>
                <h3> {props.carAmt} </h3>
                <button onClick={MyHandler}> Change Model </button>
            </div>
        </div>
    );
}

export default Car;