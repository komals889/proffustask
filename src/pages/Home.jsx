import React,{useState,useEffect} from 'react'
import Categories from '../components/Categories'
import FAQs from '../components/FAQs'
import Footer from '../components/Footer'
import HaveARead from '../components/HaveARead'
import Topics from '../components/Topics'
import axios from 'axios'
export default function Home() {
    const [products, setproducts]=useState([])
    useEffect(()=>{
        console.log("xxxxxx");
        const getData=async()=>{
             
            const {data} =await axios.get("https://jsonplaceholder.typicode.com/users")
             console.log(data);
            setproducts(data)
            
        }
        getData()

    },[] )
  return (
    <div>
        <img src="./images/2.jpg" className='img-fluid' width={"100%"} height={"50%"}  alt="" />
        <div className='container-fluid mt-5'>
                <h1> Categories</h1>
        <div className="row mt-3">
             {
                 products.map((item)=>{
                   return <div className="col-sm-2">
                    <div className="card">
                        <div className="card-body">
                         
                            <ul className='list-group'>
                                <li className='list-group-item'>
                                    Id:        {item.id}
                                </li>
                                <li className='list-group-item'>
                                    Name:          {item.name}
                                     </li>
                                <li className='list-group-item'>
                                    userName:          {item.userName}
                                </li>                                               
                                <button className='btn btn-dark w-100'  >View Details</button>
                                               
                            </ul>
                        </div>
                </div> <br />
                    </div>
})
             }
             
        </div>
    </div>

<Categories/>
<FAQs/>
<HaveARead/>
<Topics/>
<Footer/>
    </div>
  )
}
