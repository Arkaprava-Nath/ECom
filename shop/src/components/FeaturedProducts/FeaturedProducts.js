import React, { useEffect, useState } from 'react'
import "./FeaturedProducts.scss"
//import useFetch from "../../hooks/useFetch";
import Card from '../Card/Card';

import useFetch from '../../hooks/useFetch';
const FeaturedProducts = ({type}) => {
   
 const {data,loading,error}=useFetch(`/products?populate=*&filters[type][$eq]=${type}`)
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
         Trending Fashion Styles: Unleash Your Inner Fashionista! 
Discover the latest fashion trends and elevate your style with our exquisite collection of dresses! From casual chic to glamorous evening wear, we have the perfect outfit for every occasion. Don't miss out on these hot-selling products that are flying off the shelves
        </p>
      </div>
     <div className="bottom">
  {error?"Something went wrong!"
  :
  loading?"loading":
  data?.map((item) => {
    return <Card item={item} key={item.id} />;
  })}
</div>

    </div>
  );
  
}

export default FeaturedProducts