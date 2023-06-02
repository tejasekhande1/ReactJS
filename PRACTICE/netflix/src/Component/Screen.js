import './Screen.css'
import Navbar from './Navbar';
import Card from './Card';
import './Navbar';

function Screen({screen,addToList}){
    return(
        <div>
            <div className="container">
                <Navbar></Navbar>
            </div>
            <div className='cards'>{
            screen.map((srn) => {
                        return <Card key={srn.id} {...srn} addToList={addToList}></Card>
                    })
            }
            </div>
        </div>

    );
}

export default Screen;