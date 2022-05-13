import React from 'react'

export default function Footer() {
  return (
    <div className='bg-primary container-fluid'> 
        <div className="row   mt-5 p-3">
             
            <div className="col-sm-3">
                 <div>
                 <img src="./images/3.jpg" alt=""  style={ {height:"90px", width:"110px"}}/>
                 </div>
            </div>
            <div className="col-sm-3">
                    <div>

                    </div>
            </div>
            <div className="col-sm-3">
                  <div>
                  <h6 className='text-light'>support</h6>
                 <h6 className='text-light'>About us</h6>
                 <h6 className='text-light'>Privacy Policy</h6>
                  </div>
            </div>
            <div className="col-sm-3">
                 <div>
                 <h6 className='text-light'>Terms & Condition</h6>
                <h6 className='text-light'>Return & Refund Policy</h6>
                <h6 className='text-light'>Shipping & Delivary Polic</h6>
                 </div>
            </div>
         
        </div>
        <div className="row">
            <div>
                <h6 className='text-center text-light'>Sea Basket ! All Rights Reserved ! 2021 Copyright</h6>
            </div>
        </div>
    </div>
  )
}
