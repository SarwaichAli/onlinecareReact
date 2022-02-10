import React from 'react'
import {Link} from 'react-router-dom'
import andriod_cr from './images/andriod_cr.png'
import mobile from './images/mobile.png'
import ios_qr from './images/ios_qr.png'
import desktop from './images/desktop.png'

function AppDownloadSec() {
  return (
    <>
    <div className="dowload-home">

    <div className="container">
    <div className="download-home-det">
        <h1><b>DOWNLOAD</b></h1>
        <h3><b>THE APP TO CONNECT TO THE PROVIDER</b></h3> <br/>
        <p>Scan QR code OR click to download the App <br/>
        </p>
        <div className="col-md-2 dhome-img">

        <Link to='https://play.google.com/store/apps/details?id=com.app.OnlineCareUS_Pt'>
        <img src={andriod_cr} alt=""/>
        </Link>
            
        </div>
        <div className="col-md-4 dhome-img">
            <img src={mobile} alt=""/>

        </div>
        <div className="col-md-2 dhome-img">
        <Link to='https://apps.apple.com/us/app/onlinecare-pt/id1561167511'>
        <img src={ios_qr} alt=""/>
        </Link>

        </div>
        <div className="col-md-4 dhome-img">

        <img src={desktop} alt=""/>

        </div>


    </div>
</div>

<div className="helphine">
    <div className="container">
        <div className="helphine-det">
            <p>Helpline we accept</p>
            
        </div>
        
    </div>
    
</div>


</div>
    </>
  )
}

export default AppDownloadSec