import './Card.css';

function Card({id,name,image,actor,addToList}){
    function addToList(){

    }
    return(
        <div className="card">
            <img className="image" src={image}></img>
            <div className='movie-info'>
                <div className="movie"> {name} </div>
                <div className="actor"> {actor} </div>
            </div>

            <div className='btn'>
                <button> Watch Now </button>
                <button onClick={ () => addToList(id)}> Add To List </button>
            </div>
        </div>
    );
}
export default Card;