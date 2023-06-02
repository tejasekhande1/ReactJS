import './App.css';
import { useState } from 'react';
import Data from './data';
import MyList from './Component/MyList';
import Screen from './Component/Screen';

function App() {
  var addList = [];
  
  function addToList(id){
    const newList = Data.filter(mv => mv.id === id);
    addList.concat(newList);
  }

  const[screen,setScreen] = useState(Data);
  return (
    <div className="App">
      <Screen screen={screen} addToList={addToList}></Screen>
    </div>
  );
}

export default App;
