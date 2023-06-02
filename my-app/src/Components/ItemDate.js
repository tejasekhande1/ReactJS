
import './ItemDate.css'

function ItemDate(props){
    const day = props.day;
    const monnth = props.month;
    const year = props.year;
    return(
        <div className="itm-dt">
            <div> {day} </div>
            <div> {monnth} </div>
            <div> {year} </div>
        </div>
    );
}

export default ItemDate;