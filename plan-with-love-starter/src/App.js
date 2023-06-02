import React, { useState } from "react";
import Data from './data';
import Tours from "./Components/Tours";
import './index.css';

const App = () => {
  const [tours,setTours] = useState(Data);
  function removeTour(id){
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  function refreshHandler(){
    setTours(Data);
  }

  if(tours.length === 0){
    return(
      <div className="refresh">
        <h2 className="title"> Plan With Love</h2>
        <div >
        <h2> No Tours Left </h2>
        <button className="btn-white" onClick={refreshHandler}> Refresh </button>
      </div>
      </div>
    );
  }

  return(
    <div className="app">
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>  
  )};

export default App;
