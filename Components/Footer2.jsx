import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer2() {
  return (
    // <MDBFooter className='text-center text-lg-start' style={{backgroundColor:'#133682',color:'white'}}>
    //   <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
    //     <div className='me-5 d-none d-lg-block'>
    //       <span>Get connected with us on social networks:</span>
    //     </div>

    //     <div>
    //       <a href='' className='me-4 text-reset'>
    //         <MDBIcon fab icon="facebook-f" />
    //       </a>
    //       <a href='' className='me-4 text-reset'>
    //         <MDBIcon fab icon="twitter" />
    //       </a>
    //       <a href='' className='me-4 text-reset'>
    //         <MDBIcon fab icon="google" />
    //       </a>
    //       <a href='' className='me-4 text-reset'>
    //         <MDBIcon fab icon="instagram" />
    //       </a>
    //       <a href='' className='me-4 text-reset'>
    //         <MDBIcon fab icon="linkedin" />
    //       </a>
    //       <a href='' className='me-4 text-reset'>
    //         <MDBIcon fab icon="github" />
    //       </a>
    //     </div>
    //   </section>

    //   <section className=''>
    //     <MDBContainer className='text-center text-md-start mt-5'>
    //       <MDBRow className='mt-3'>
    //         <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
    //           <h6 className='text-uppercase fw-bold mb-4'>
    //             <MDBIcon icon="gem" className="me-3" />
    //             Company name
    //           </h6>
    //           <p>
    //             Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
    //             consectetur adipisicing elit.
    //           </p>
    //         </MDBCol>

    //         <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
    //           <h6 className='text-uppercase fw-bold mb-4'>Services</h6>
    //           <p>
    //             <a href='#!' className='text-reset'>
    //               Angular
    //             </a>
    //           </p>
    //           <p>
    //             <a href='#!' className='text-reset'>
    //               React
    //             </a>
    //           </p>
    //           <p>
    //             <a href='#!' className='text-reset'>
    //               Vue
    //             </a>
    //           </p>
    //           <p>
    //             <a href='#!' className='text-reset'>
    //               Laravel
    //             </a>
    //           </p>
    //         </MDBCol>

    //         <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
    //           <h6 className='text-uppercase fw-bold mb-4'>Links</h6>
    //           <p>
    //             <a href='#!' className='text-reset'>
    //               Pricing
    //             </a>
    //           </p>
    //           <p>
    //             <a href='#!' className='text-reset'>
    //               Settings
    //             </a>
    //           </p>
    //           <p>
    //             <a href='#!' className='text-reset'>
    //               Orders
    //             </a>
    //           </p>
    //           <p>
    //             <a href='#!' className='text-reset'>
    //               Help
    //             </a>
    //           </p>
    //         </MDBCol>

    //         <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
    //           <h6 className='text-uppercase fw-bold mb-4'>Contact us</h6>
    //           <p>
    //             <MDBIcon icon="home" className="me-2" />
    //             New York, NY 10012, US
    //           </p>
    //           <p>
    //             <MDBIcon icon="envelope" className="me-3" />
    //             info@example.com
    //           </p>
    //           <p>
    //             <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
    //           </p>
    //           <p>
    //             <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
    //           </p>
    //         </MDBCol>
    //       </MDBRow>
    //     </MDBContainer>
    //   </section>
    // </MDBFooter>
    <>
     <style>
        {`
          .Footer {
            padding: 2rem 0;
            margin-top: 8rem;
            background-color:#133682;
            color:white;
            height:50vh;
          }
          
          .ft-1 h3 {
            font-weight: 700;
            font-family: cursive;
            letter-spacing: 2px;
            padding: 0.5rem 0;
          }
          
          .ft-1 span {
            color: #f60838;
          }
          
          .ft-1 p {
            padding: 0rem 5rem 0.8rem 0;
            font-weight: 500;
          }
          
          .footer-icons i {
            padding: 0.4rem 0.5rem;
            background: #e1e1e1;
            color: #f60838;
            margin: 0 0.5rem;
            border-radius: 50%;
          }
          
          .footer-icons i:hover {
            background: #f60838;
            color: #fff;
            transition: 0.6s;
            cursor: pointer;
          }
          
          .Footer h5 {
            color: white;
            font-weight:600;
          }
          
          .ft-2 ul {
            list-style: none;
            padding-left: 0;
          }
          
          .ft-2 ul li {
            padding: 0.35rem 0;
            font-weight: 500;
          }
          
          .ft-2 ul a {
            text-decoration: none;
            color: white;
            font-size: 1.06rem;
          }
          
          .ft-3 p {
            font-weight: 500;
            padding: 0.1rem 0;
            font-size: 1.06rem;
          }
          
          .ft-3 i {
            padding-right: 0.5rem;
          }

    

    
          
       
        `}
      </style>
            <div className="Footer">
                <div className="container">
                    <div className="row">
                        
                        
                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h5>Services</h5>
                            <ul>
                                <li className="nav-item">
                                    <a className="" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Find A Doctor</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Plans</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Add Your Hospital/Clinic</a>
                                </li>
    
                            </ul>
                        </div>

                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h5>Quick Links</h5>
                            <ul>
                                <li className="nav-item">
                                    <a className="" href="/">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Privacy Policy</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Refund Policy</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Terms Of Use</a>
                                </li>
                              
                            </ul>
                        </div>



                        <div className="col-md-6 col-lg-5 col-12 ft-1">
                          <h3>Health<span>Mudraa</span></h3>
                            <h3>Contact Us</h3>
                            <p>#2594/1, 3rd Floor, 15th Cross, 27th Main Rd, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102</p>
                            <div className="footer-icons">
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-linkedin-in"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
  );
}