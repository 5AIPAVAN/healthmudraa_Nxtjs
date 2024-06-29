import React from 'react'


export default function FrequentlyAskedQuestions() {
  return (
   <>
    <style>{`
    .accordion-button:not(.collapsed) {
      color:blue;
  background-color: white;
 box-shadow:1px solid green;
    }
    .accordion{

      --bs-accordion-btn-focus-box-shadow: none;
  
    }`
    }

      
      </style>
    <div className="parent my-5" style={{display:'flex',justifyContent:'center',flexWrap:'wrap'}}>
        <h1 className='my-5 fw-bold'>Frequently Asked Questions</h1>

        <div className="child" style={{width:'80%',border:'1px solid black',borderRadius:'10px'}}>
      <div className="accordion accordion-flush p-4" id="accordionFlushExample">

  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed fw-bold my-2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style={{fontSize:'1.2rem',letterSpacing:'0.7px'}}>
        What is HealthMudraa?
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body my-2" style={{letterSpacing:'0.7px'}}>HealthMudraa is a health information platform with various medical services.It offers subscription-based healthcare solutions,including surgery assistance,physiotheraphy,nursing and insurance options.</div>
    </div>
  </div>


  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed fw-bold my-3" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" style={{fontSize:'1.2rem',letterSpacing:'0.7px'}}>
        How to use HealthMudraa?
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body my-2" style={{letterSpacing:'0.7px'}}>HealthMudraa is a health information platform with various medical services.It offers subscription-based healthcare solutions,including surgery assistance,physiotheraphy,nursing and insurance options.</div>
    </div>
  </div>


  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed fw-bold my-3" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" style={{fontSize:'1.2rem',letterSpacing:'0.7px'}}>
        What are the subscription plans?
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body my-2" style={{letterSpacing:'0.7px'}}>HealthMudraa is a health information platform with various medical services.It offers subscription-based healthcare solutions,including surgery assistance,physiotheraphy,nursing and insurance options.</div>
    </div>
  </div>


  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed fw-bold my-3" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour" style={{fontSize:'1.2rem',letterSpacing:'0.7px'}}>
       How to consult a doctor?
      </button>
    </h2>
    <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body my-2" style={{letterSpacing:'0.7px'}}>HealthMudraa is a health information platform with various medical services.It offers subscription-based healthcare solutions,including surgery assistance,physiotheraphy,nursing and insurance options.</div>
    </div>
  </div>


  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed fw-bold my-3" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive" style={{fontSize:'1.2rem',letterSpacing:'0.7px'}}>
        How to consult a doctor?
      </button>
    </h2>
    <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body my-2" style={{letterSpacing:'0.7px'}}>HealthMudraa is a health information platform with various medical services.It offers subscription-based healthcare solutions,including surgery assistance,physiotheraphy,nursing and insurance options.</div>
    </div>
  </div>


</div>
</div>
    </div>
    </>
  )
}


