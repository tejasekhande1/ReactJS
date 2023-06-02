
import './App.css';
import Car from './Components/Car';
// import Data from './Components/Data.js';

const carProd = [
  {model:"Honda",imgUrl:"https://static.autox.com/uploads/cars/2022/11/honda-new-wr-v.jpg",amount:"1Cr"},
  {model:"Mercedies",imgUrl:"https://media.zigcdn.com/media/model/2023/Feb/e-class_360x240.jpg",amount:"2Cr"},
  {model:"Ferrari",imgUrl:"https://www.supercars.net/blog/wp-content/uploads/2022/02/Ferrari-SF90-Stradale-1.jpg",amount:"3Cr"}
];

function App() {
  return (
    <div className="App">
      {/* <Data model="Mercedies" year="2023" amount="1Cr"> </Data> */}
      <Car name={carProd[0].model} imgCar={carProd[0].imgUrl} carAmt={carProd[0].amount}/>
      <Car name={carProd[1].model} imgCar={carProd[1].imgUrl} carAmt={carProd[1].amount}/>
      <Car name={carProd[2].model} imgCar={carProd[2].imgUrl} carAmt={carProd[2].amount}/>
    </div>
  );
}

export default App;
