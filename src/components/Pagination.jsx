import axios from 'axios';
import React, { useState , useEffect} from 'react'
import Card from './Card';

const Pagination = () => {
  const [products,setProducts] = useState([]);

  const fetchProducts = async() =>{
    const response = await axios.get(`https://dummyjson.com/products?limit=4`);
    setProducts(response.data.products);
  }
  console.log(products,'response response');

  useEffect(()=>{
    fetchProducts()
  },[])
  return (
    <div>
      <h2>Here All The Products Will be Shown</h2>
      <div className='CardContainer'>
      {
        products.map((ele)=>(
          <Card imgSrc={ele.thumbnail} name={ele.title} price={ele.price} key={ele.id}/>
        ))}
      </div>
      <div>
      { [...Array(20)].map((_,i)=>{
        <p key={i}>{i+1}</p>
      })}
      </div>
    </div>
  )
}

export default Pagination
