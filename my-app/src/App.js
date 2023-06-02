import logo from './logo.svg';
import './App.css';
import './Components/Item'
import Item from './Components/Item';
import './Components/ItemDate';
import ItemDate from './Components/ItemDate';

function App() {

  const response = [
    {
      itemName : "Nirma1",
      itemDay : "20",
      itemDate : "June",
      itemYear : "2023"
    },
    {
      itemName : "Tide",
      itemDay : "21",
      itemDate : "June",
      itemYear : "2023"
    },
    {
      itemName : "SurfExcel",
      itemDay : "22",
      itemDate : "June",
      itemYear : "2023"
    }
  ];

  return (
      <div>
        <div className="App">
        Tejas
        <Item name={response[0].itemName}>Main Apki First Item Hoooon</Item>
        <ItemDate day={response[0].itemDay} month={response[0].itemDate} year={response[0].itemYear}></ItemDate>
        
        <Item name={response[1].itemName}> Main Apki First Item Hoooon </Item>
        
        <ItemDate day={response[1].itemDay}  month={response[1].itemDate}  year={response[1].itemYear}> </ItemDate>
        
        <Item name={response[2].itemName}> Main Apki First Item Hoooon </Item>
        
        <ItemDate day={response[2].itemDay}  month={response[2].itemDate}  year={response[2].itemYear}> </ItemDate>
        </div>
      </div>
  );
}

export default App;
