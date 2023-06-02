import './Data.css';

function data(props){
    const model = props.model;
    const year = props.year;
    const amt = props.amount;
    return(
        <div className="main">
            <div className="info">
                <span> {model} </span>
                <span> {year} </span>
                <span> {amt} </span>
            </div>
        </div>
    );
}

export default data;