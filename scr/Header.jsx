import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";


function Header() {
    return (
        <>
            <Navbar className="header-nav">
            
                <div className="random-color">
                   <NavLink to="/"><img src="https://www.gigacalculator.com/img/randomizers/color-wheel-picker.jpg"/>Random Color Generate</NavLink>
                
                    
                </div>
            </Navbar>
        </>
    )
}

export default Header;