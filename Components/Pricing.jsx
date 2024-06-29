import React from 'react'
// import './Pricing.css'
// import 'E:/HealthMudraa_Nextjs/hm_frontend/Components/Pricing.css'

export default function Pricing() {
  return (

    <div className="outerplans" style={{marginTop:'5rem',display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
        <p style={{fontSize:'2.5rem',fontWeight:'600',letterSpacing:'2px'}}> Plans</p>
    <div className="innerplans my-5" style={{width:'100%'}}>
    <section class="pricing py-2">
    <div class="container" style={{width:'80%',display:'flex',justifyContent:'center',alignItems:'center'}} >
        <div class="row">
            
            <div class="col-lg-4" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <div class="card mb-5 mb-lg-0">
                    <div class="card-body">
                        <h5 class="card-title text-uppercase text-center">Gold One</h5>
                        <h6 class="card-price text-center" style={{marginTop:'1.5rem'}}><span class="priceclass">699</span><span class="period">/year</span></h6>
                        <hr/>
                        <ul class="fa-ul">
                            <li><i className="bi bi-check"></i>Applies to one person only</li>
                            <li><i className="bi bi-check"></i>Free Consultation worth 699</li>
                            <li><i className="bi bi-check"></i>Priority Appointment booking</li>
                            <li><i className="bi bi-check"></i>24/7 Customer Support</li>
                            <li><i className="bi bi-check"></i>Hospitalization Support</li>
                        </ul>
                        <a href="#" class="btn btn-block btn-primary text- my-3" style={{width:'95%',borderRadius:'0.6rem'}}>Buy The Plan</a>
                    </div>
                </div>
            </div>
            
            <div class="col-lg-4" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <div class="card mb-5 mb-lg-0">
                    <div class="card-body">
                        <h5 class="card-title text-uppercase text-center">Gold Family</h5>
                        <h6 class="card-price text-center" style={{marginTop:'1.5rem'}}><span class="priceclass">2499</span><span class="period">4+2 Persons/Year</span></h6>
                        <hr/>
                        <ul className="fa-ul">
      <li><i className="bi bi-check"></i> 4+2 - 4 Adults & 2 Children</li>
      <li><i className="bi bi-check"></i> Free Consultation Voucher</li>
      <li><i className="bi bi-check"></i> Priority Appointment Booking</li>
      <li><i className="bi bi-check"></i> 24/7 Customer Support</li>
      <li><i className="bi bi-check"></i> Hospitalization Support</li>
    </ul>
                        <a href="#" class="btn btn-block btn-primary my-3" style={{width:'95%',borderRadius:'0.6rem'}}>Buy The Plan</a>
                    </div>
                </div>
            </div>
            
            <div class="col-lg-4" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <div class="card mb-5 mb-lg-0">
                    <div class="card-body">
                        <h5 class="card-title text-uppercase text-center">Gold Grand Family</h5>
                        <h6 class="card-price text-center" style={{marginTop:'1.5rem'}}><span class="priceclass">2999</span><span class="period">4+4 Persons/Year</span></h6>
                        <hr/>
                        <ul class="fa-ul">
                        <li><i className="bi bi-check"></i>4+4- 4 Adults & 4 Children</li>
                            <li><i className="bi bi-check"></i>Free Consultation Voucher</li>
                            <li><i className="bi bi-check"></i>Priority Appointment booking</li>
                            <li><i className="bi bi-check"></i>24/7 Customer Support</li>
                            <li><i className="bi bi-check"></i>Hospitalization Support</li>
                        </ul>
                        <a href="#" class="btn btn-block my-3" style={{width:'95%',borderRadius:'0.6rem'}}>Buy The Plan</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</div>
</div>
  )
}
