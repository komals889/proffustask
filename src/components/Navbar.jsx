import React from 'react'
import Categories from './Categories'

export default function Navbar() {
  return (
      <div >
        <nav class="navbar navbar-expand-sm navbar-light bg-light">
            <div class="container-fluid">
                    <img src="./images/4.jpg" alt="" style={ {height:"90px", width:"110px"}}  />
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarID"
                        aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarID">
                        <div class="navbar-nav ms-auto">
                            <a class="nav-link active mr-5" aria-current="page" href="#">Category</a>
                            <a class="nav-link active" aria-current="page" href="#">FAQs</a>
                            <a class="nav-link active" aria-current="page" href="#">My Cart</a>
                            <button class="btn btn-primary" aria-current="page" href="#">Login</button>
                            
                        </div>
                    </div>
                </div>
            </nav>         

    </div>
  )
}

