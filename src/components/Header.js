import {Link} from 'react-router-dom'
import logo from './images/logo.png'
import React, { useState, useEffect } from 'react';
import { Button } from './Button';

function Header() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
// function Header() {
  return (
  <>
                   <div className="Nav-bar">
                    <div className="container">
                        <nav className="navbar navbar-default mynav">
                            <div className="container-fluid">
                            
                              <div className="navbar-header">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                  <span className="sr-only">Toggle navigation</span>
                                  <span className="icon-bar"></span>
                                  <span className="icon-bar"></span>
                                  <span className="icon-bar"></span>
                                </button>
                                <Link to='/' className="navbar-brand nav-logo" >
    
                                  <img src={logo} alt=""/>
            
                                </Link>
                              </div>
                          
                              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul className="nav navbar-nav nav-text">
                     
                                  <li className="nav-items">
                                  <Link to='/index' className="nav-links"> Home </Link>
                                  </li>
                                  <li className="nav-items">
                                  <Link to='/' className="nav-links"> For Partners </Link>
                                  </li>
                                  <li className="nav-items">
                                  <Link to='/symptoms' className="nav-links"> Symptoms We Treat </Link>
                                  </li>
                                  <li className="nav-items">
                                  <Link to='/faq' className="nav-links"> FAQ </Link>
                                  </li>
                                  <li className="nav-items">
                                  <Link to='/' className="nav-links"> <button>Login/Register</button> </Link>
                                  </li>
                                  
                                </ul>
                                {/* {button && <Button buttonStyle='btn--primary'>SIGN UP</Button>} */}
            
                              </div>
                            </div>
                          </nav>

                    </div>

                </div>
  </>
  )
}

export default Header;
