import React from 'react'

export default function Needhelp() {
  return (
    <>
    <style>
        {`
          @media (max-width: 1260px) {

            .needhelp{
                margin:1rem;
            }
            .innercont {
              flex-direction:column;
            }
            .others{
                flex-direction:column;
            }
            .cont2{
                margin:1rem;
            }
            .cont3{
                align-items:center;
            }

          }
          
        `}
      </style>
    <div style={{marginTop:'6rem',display:'flex',justifyContent:'center',flexWrap:'wrap',alignItems:'center'}} >
 
 <div className="cont" style={{width:'80%',border:'1px solid black',padding:'3rem',borderRadius:'10px'}}>
        <div className="innercont" style={{display:'flex',justifyContent:'space-around',alignItems:'center'}}>
            <div className="needhelp">
            <h2 style={{fontWeight:'600'}}>Need Help?</h2>
            </div>
            <div className="others" style={{display:'flex',justifyContent:'space-evenly',width:'60%',alignItems:'center'}} >
                <div className="cont1" style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
                    <p style={{letterSpacing:'1px'}}>Call or WhatsApp at</p>
                    <p style={{fontWeight:'600',fontSize:'1.2rem',letterSpacing:'1px'}}>+91-73497 96783</p>
                </div>
                <div className="cont2" style={{color:'white',display:'flex',justifyContent:'center',alignItems:'center',padding:'1.4rem',width:'2rem',height:'2rem',backgroundColor:'#133682',borderRadius:'50%'}}>
                    Or
                </div>
                <div className="cont3" style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
                <p style={{letterSpacing:'1px'}}>Live Chat with Health Pilots</p>
                <p style={{ color: '#133682', textDecoration: 'underline',fontSize:'0.9rem',fontWeight:'600' }}>Start live chat</p>

                    
                </div>
            </div>
         
        </div>
        </div>
      
    </div>
    </>
  )
}
