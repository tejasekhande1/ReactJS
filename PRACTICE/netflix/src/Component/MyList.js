function MyList({id,image,name,actor}){
    return(
        <div className="card">
            <img className="image" src={image}></img>
            <div className='movie-info'>
                <div className="movie"> {name} </div>
                <div className="actor"> {actor} </div>
            </div>
        </div>
    );
}

export default MyList;