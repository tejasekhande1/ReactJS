import './Navbar.css';
import { useRef } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import MyList from './MyList';

function Navbar(){
    const navRef = useRef();
    
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    function listHandler(){
        <MyList></MyList>
    }

    return(
        <div className='container'>
            {/* <h3> Logo </h3> */}
            <img className="logo" src="https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png"/>
            <nav ref={navRef}>
                <a href="#"> TV Shows </a>
                <a href="#"> Movies </a>
                <a href="#"> Recently Added </a>
                <a href="#" onClick={listHandler}> My List </a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars/>
            </button>
        </div>
    );
}

export default Navbar;