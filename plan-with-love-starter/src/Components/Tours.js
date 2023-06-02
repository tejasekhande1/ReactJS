import Card from "./Card";
import '/home/tejas/Desktop/REACT_JS/plan-with-love-starter/src/index.css';

function Tours({tours,removeTour}){
    return(
        <div className="container">
            <div>
                <h2 className="title"> Plan With Love</h2>
                <div className="cards">
                 {
                    tours.map((tour) => {
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>        // pure object ki copy pass kiye
                    })
                }
                </div>
            </div>
        </div>
    );
}

export default Tours;