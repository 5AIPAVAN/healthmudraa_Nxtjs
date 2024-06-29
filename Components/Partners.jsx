import React from 'react'
import partners from './partners.png';
import transperant from './transperant.png'
import apollotransperant from './apollotransperant.png'
import fortisransperant from './fortistransperant.png'
import lilavathitransperant from './lilavathitransperant.png'
import medantatransperant from './medantatransperant.png'
import meenakshitransperant from './meenakshitransperant.png'

export default function Partners() {
  return (
   <div style={{marginTop:'6rem',display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
     <h1 className="fw-bold" style={{letterSpacing:'2px'}} >Our Trusted Partners</h1>

    <div className="inside" style={{marginTop:'4rem',width:'80%',display:'flex',justifyContent:'center'}}>

   

    <div className="partners" style={{display:'flex',justifyContent:'space-evenly',flexDirection:'row',alignItems:'center'}}>
    <img src='./apollotransperant.png' alt="" style={{width:'10%'}} />
    <img src='./lilavathitransperant.png' alt="" style={{width:'15%'}} />
    <img src='./fortistransperant.png' alt="" style={{width:'15%'}} />
    <img src='./medantatransperant.png' alt="" style={{width:'15%'}} />
    <img src='/meenakshitransperant.png' alt="" style={{width:'15%'}} />

    </div>
    </div>
   </div>
  )
}
