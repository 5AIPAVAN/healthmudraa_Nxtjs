import React from 'react';
import heroimg from './heroimg.png'
import heroimg from 'E:/HealthMudraa_Nextjs/hm_frontend/Components/heroimg.png'
import Link from 'next/link';

export default function Hero() {
  return (<>
  <style>
        {`

		
.col-lg-77{
	max-width:30vw
}
.col-lg-55{
	max-width:45vw;
}

		
          @media (max-width: 850px) {

			.neww{

				display:flex;
				justify-content:center;
				align-items:center;
				width:100%;
			
			}

			.hearopart{
				width:80%;
				display:flex;
				flex-direction:column;
			}

			.col-lg-77{
				max-width:100%;
			}
			.col-lg-55{
				max-width:100%;
			}
         
          }
    
        `}
      </style>
 
    <div style={{display:'flex',justifyContent:'center'}}>
       
  
    
<div className='neww'>
	<div class="heropart row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3">
		<div class="col-lg-77 p-3 p-lg-5 pt-lg-3">
			<div class="lc-block mb-3">
				<div editable="rich">
					<p style={{fontSize:'3.5rem',letterSpacing:'3px'}} class="fw-bold display-4">Watch<br/> Connect <br/> Heal<p></p>
						<p></p>
					</p>
				</div>
			</div>

			<div class="lc-block mb-3 my-4">
				<div editable="rich ">
					<p class="lead">Watch expert doctor videos, book appointments, and get the treatment you need.
					</p>
				</div>
			</div>

			<div class="lc-block d-grid gap-2 d-md-flex justify-content-md-start my-4">
                <Link class="btn btn-primary px-4 me-md-2" href="/videos" role="button" style={{padding:'0.7rem',backgroundColor:'#133682'}}>Watch Videos</Link>
				<a class="btn btn-outline-secondary px-4" href="#" role="button" style={{padding:'0.7rem',color:'#133682',backgroundColor:'white'}}>Consult Doctor</a>
			</div>
		</div>
		<div class="col-lg-55 " >
			<div class="lc-block"><img class="rounded-start w-100" src="/heroimg.png" alt="Photo by Diego PH" width="720"/></div>
		</div>
	</div>
</div>
 
 
  
    </div>
	</>
  )
}
