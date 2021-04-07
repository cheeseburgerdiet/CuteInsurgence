import React from 'react';

const Header = () =>{
    return(
        <div className="navbar-fixed" >
            <nav>
                <div className="nav-wrapper">
                    <a href="/cuteinsurgence" className="brand-logo"><i className="fas fa-paw"></i>Cute Insurgence!<i className="far fa-smile-beam"></i></a>
                    <div>
                        <ul id="nav-mobile" className="right">
                            <li><i className="fab fa-instagram" style={{marginRight:"30px"}}></i></li>
                            <li><i className="fab fa-twitter"style={{marginRight:"20px"}}></i></li>
                            <li><a href="/aboutus">About Us</a></li>
                            <li><a href=" /admin/login">Login</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
    
};

export default Header;