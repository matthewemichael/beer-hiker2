import React, { Component } from 'react';
import '../NavBarOut/NavBarOut.css';
// import logo from '../../images/BeerHikerLogo2.jpg';


class NavBarOut extends Component {
    render () {
        if (localStorage.jwtToken) {
            return (
                <div className={`navBar`}>
                    <div>
                        <p>Logged In</p>
                        {/* <img src={logo} className={`logo`} alt='logo'/>   */}
                    </div>
                </div>
            );
        } else {
            return (
                <div className={`navBar`}>
                    <div>
                        <p>Logged Out</p>
                    </div>
                </div>
            )
        }
        
    }  
}; 

export default NavBarOut;