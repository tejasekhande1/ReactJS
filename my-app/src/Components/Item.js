import './Item.css'

function Item(props){
    const itemName = props.name;
    return
    (
    <div className="temp">
        <p> {itemName} </p>
        {props.children}
    </div>

        );
}

export default Item;