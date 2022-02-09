import React from 'react';
import {Link} from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));
  const symptomsImg = importAll(require.context('./images/symptoms', false, /\.(png|jpe?g|svg)$/));


 function slider() {

    var setting = {

        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      };
  return (
      <>
<div className='header'>


<div className="container">
<div className="header-section">
    
    <div className="col-md-6 col-sm-8 col-xs-10">
        <div className="header-section-left">
            <h1><b>OnlineCare</b> </h1>

            <p> Virtual teleheath provider</p>

                <Link to='/' className="symptom-img" >
                <img src= {images['symptoms_btn.png']} alt=""/>
                </Link>


            <div className="col-md-8 col-sm-10 col-xs-10 margin-bottom-15">

                <Slider className='setting' {...setting}>

                    <div>

                    <Link to='/'>
                    <img src= {symptomsImg['ANXIETY.png']} alt=""/>
                    </Link>

                    </div>

                    <div>
                        
                        <Link to='/'>
                        <img src= {symptomsImg['ARTHRITIS.png']} alt=""/>
                        </Link>
    
                        </div>

                        <div>
                        
                        <Link to='/'>
                        <img src= {symptomsImg['ACHES.png']} alt=""/>
                        </Link>
    
                        </div>

                        <div>
                        
                        <Link to='/'>
                        <img src= {symptomsImg['backpain.png']} alt=""/>
                        </Link>
    
                        </div>

                        <div>
                        
                        <Link to='/'>
                        <img src= {symptomsImg['bronchitis.png']} alt=""/>
                        </Link>
    
                        </div>

                        <div>
                        
                        <Link to='/'>
                        <img src= {symptomsImg['chronic.png']} alt=""/>
                        </Link>
    
                        </div>

                        <div>
                        
                        <Link to='/'>
                        <img src= {symptomsImg['cough.png']} alt=""/>
                        </Link>
    
                        </div>

                        <div>
                        
                        <Link to='/'>
                        <img src= {symptomsImg['covid.png']} alt=""/>
                        </Link>
    
                        </div>

                        <div>
                        
                        <Link to='/'>
                        <img src= {symptomsImg['depression.png']} alt=""/>
                        </Link>
    
                        </div>

                        <div>
                        
                        <Link to='/'>
                        <img src= {symptomsImg['diarrhea.png']} alt=""/>
                        </Link>
    
                        </div>

                        <div>
                        
                        <Link to='/'>
                        <img src= {symptomsImg['ear.png']} alt=""/>
                        </Link>
    
                        </div>

                        <div>
                        
                        <Link to='/'>
                        <img src= {symptomsImg['fatigue.png']} alt=""/>
                        </Link>
    
                        </div>

                        <div>
                        
                        <Link to='/'>
                        <img src= {symptomsImg['fever.png']} alt=""/>
                        </Link>
    
                        </div>

                        <div>
                        
                        <Link to='/'>
                        <img src= {symptomsImg['flu.png']} alt=""/>
                        </Link>
    
                        </div>

                        <div>
                        
                        <Link to='/'>
                        <img src= {symptomsImg['headaches.png']} alt=""/>
                        </Link>
    
                        </div>

                        <div>
                        
                        <Link to='/'>
                        <img src= {symptomsImg['joint.png']} alt=""/>
                        </Link>
    
                        </div>

                        <div>
                        
                        <Link to='/'>
                        <img src= {symptomsImg['medicatin.png']} alt=""/>
                        </Link>
    
                        </div>

                        <div>
                        
                        <Link to='/'>
                        <img src= {symptomsImg['nausea.png']} alt=""/>
                        </Link>
    
                        </div>

                        <div>
                        
                        <Link to='/'>
                        <img src= {symptomsImg['neurological.png']} alt=""/>
                        </Link>
    
                        </div>

                        <div>
                        
                        <Link to='/'>
                        <img src= {symptomsImg['pelvic.png']} alt=""/>
                        </Link>
    
                        </div>

                        <div>
                        
                        <Link to='/'>
                        <img src= {symptomsImg['rash.png']} alt=""/>
                        </Link>
    
                        </div>

                        <div>
                        
                        <Link to='/'>
                        <img src= {symptomsImg['respiratory.png']} alt=""/>
                        </Link>
    
                        </div>

                        <div>
                        
                        <Link to='/'>
                        <img src= {symptomsImg['shortness.png']} alt=""/>
                        </Link>
    
                        </div>

                        <div>
                        
                        <Link to='/'>
                        <img src= {symptomsImg['sinus.png']} alt=""/>
                        </Link>
    
                        </div>

                        <div>
                        
                        <Link to='/'>
                        <img src= {symptomsImg['sleep.png']} alt=""/>
                        </Link>
    
                        </div>

                        <div>
                        
                        <Link to='/'>
                        <img src= {symptomsImg['sneezing.png']} alt=""/>
                        </Link>
    
                        </div>

                        <div>
                        
                        <Link to='/'>
                        <img src= {symptomsImg['sore.png']} alt=""/>
                        </Link>
    
                        </div>

                        <div>
                        
                        <Link to='/'>
                        <img src= {symptomsImg['sprains.png']} alt=""/>
                        </Link>
    
                        </div>

                        <div>
                        
                        <Link to='/'>
                        <img src= {symptomsImg['urinary.png']} alt=""/>
                        </Link>
    
                        </div>

                        <div>
                        
                        <Link to='/'>
                        <img src= {symptomsImg['yeast.png']} alt=""/>
                        </Link>
    
                        </div>

                </Slider>

            </div>

        </div>


    </div>


    
<div className="header-section-right">
    <div className="col-md-6 col-sm-8 col-xs-10">

    
    <div className="header-sec-right-img">

    <Link to='/'>
    <img src= {images['call_911_1.png']} alt=""/>
    </Link>
    <Link to='/'>
    <img src= {images['vedio_btn.png']} alt=""/>
    </Link>

    </div>
        

     </div>
</div>

</div>
</div>
</div>
      </>




  )

}

export default slider;



