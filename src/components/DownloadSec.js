import React from 'react';
import {Link} from 'react-router-dom'

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

function DownloadSec() {
  return(
    <>
            <div className="work-home">
                <div className="container">
                    <div className="work-home-det">
                        <div className="col-md-6 work-home-det1">
                            <img src= {images['img.png']} alt=""/>
    
                        </div>

                     <div className="col-md-6 download-img">
                      <Link to='/'>
                        <img src= {images['Download-img.png']} alt=""/>
                     </Link>
                     <Link to='/' className="howit-btn">
                        <img src= {images['howits.png']} alt=""/>
                     </Link>
                     

                     </div>
    
                </div>
    
            </div>
            </div>
    </>
)
}

export default DownloadSec;
