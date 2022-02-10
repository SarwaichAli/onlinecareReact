import React from 'react'
import {Link} from 'react-router-dom'
import logo from './images/logo.png'
import facebook_icon from './images/facebook_icon.png'
import instagram_icon from './images/instagram_icon.png'
import andriod from './images/andriod.png'
import app_icon from './images/app_icon.png'

function Footer() {
  return (
    <>
    <div className="footer">
                 <div className="container">
                     <div className="col-md-6 first-part-f">
                         <div className="footer-logo">
                         <Link to='/'>
                         <img src={logo} alt=""/>
                         </Link>

                         </div>
                        
                  
                            <p>Download the app to video call with a doctor from the comfort of your home. We provide basic tele-health services to all residents of Michigan, Wisconsin, Illinois and Florida.</p>
                            <div className="footer-icons">
                              <Link to='https://www.facebook.com/Onlinecare.usa'>
                              <img src={facebook_icon} alt=""/>
                              </Link>

                             <Link to='https://www.instagram.com/onlinecare.usa/'>
                             <img src={instagram_icon} alt=""/>
                             </Link>

                            </div>

                            <div className="footer-icon-dow">
                            <Link to='https://play.google.com/store/apps/details?id=com.app.OnlineCareUS_Pt'>
                             <img src={andriod} alt=""/>
                             </Link>
                             <Link to='https://apps.apple.com/us/app/onlinecare-pt/id1561167511'>
                             <img src={app_icon} alt=""/>
                             </Link>
                                
                            </div>
   
                        

                     </div>
                
                       
                           
                      
                     <div className="col-md-6 third-part-f">
                             {/* <div className="alert alert-success contactformmsg"  role="alert" style='display:none;'></div> */}
                             <form action="contact.php" method="POST" role="form" id="myForm">


                             
                                 <div className="form-group my-form-group col-md-6">
                                     <input type="text" className="form-control" name="name"  placeholder="Name*"/>
                                     
                                 </div>
                                

                                 <div className="form-group my-form-group col-md-6">
                                     <input type="lastname" name="email" className="form-control"  placeholder="Last Name*"/>
                                 </div>

                                    <div className="form-group my-form-group col-md-6">
                                     <input type="email" className="form-control" name="email"  placeholder="Email*"/>
                                     
                                 </div>
                                

                                 <div className="form-group my-form-group col-md-6">
                                     <input type="text" name="phone" className="form-control"  placeholder="Phone"/>
                                 </div>

                                    <div className="form-textarea my-form-group col-md-12">
                                    <textarea name="subject" id="input" className="form-control" rows="3" required="required" placeholder="Subject"></textarea>

                                </div>
                                

                                   <div className="form-textarea my-form-group col-md-12">
                                    <textarea name="message" id="input" className="form-control" rows="3" required="required" placeholder="Type your message here"></textarea>

                                </div>
                                 <div className="form-textarea my-form-group col-md-12">
                                 <button type="submit" className="btn btn-primary col-md-12">Submit</button>
                                 </div>
                             </form>
                             

                         

                     </div>
              

                 </div>

             </div>
    </>
  )
}

export default Footer