import React from 'react'

export default function Slider() {
  return (
    <div style={{display:'flex',justifyContent:'center'}}> 
    <div className="slid" style={{width:'100%'}}>
         <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="https://www.dcmedical.org/Dcmedical.org/media/top-level/careers/nurse-holding-stethoscope-closeu-carouselp.jpg" className="d-block w-100" style={{maxHeight:'70vh',objectFit:'cover'}} alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://emedia1.nhs.wales/CAVUhb/cache/file/43C918EB-87F9-415B-89F71EBCB47656B5_carouselimage.jpeg" className="d-block w-100" style={{maxHeight:'70vh',objectFit:'cover'}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://www.mynmchealth.org/wp-content/uploads/2020/11/Surgery.jpg" className="d-block w-100" style={{maxHeight:'70vh',objectFit:'cover'}} alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
    </div>
  )
}
