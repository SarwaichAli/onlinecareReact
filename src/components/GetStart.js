import React from 'react'
import {Link} from 'react-router-dom'
import get_started from './images/get_started.png'

function GetStart() {
  return (
    <>
                <div className="container video-chat">
                <div className="col-md-8 video-chat-det">
                    <h2><b>Video Chat with a Doctor</b></h2>
                <p>Now you can connect with a doctor from your smartphone, tablet or <br/> computer- anytime, day or night.</p>
                </div>

                <div className="col-md-2"> </div>

                <div className="col-md-2 col-sm-4 col-xs-4 video-chat-btn">
                <Link to='https://onlinecare.com/onlinecareus' className="connectlink">
                        <img src= {get_started} alt=""/>
                     </Link>
                </div>
                
                
            </div>
    </>
  )
}

export default GetStart