import React from 'react';
import Product from "../../products"
import ProductWrite from './allProductList'

const productList = Product

console.log(productList)

function AllTheThings(props) {
 
  return (
    <div className="AllTheThings">
       <h2>Put these in your cart!</h2>
        <ProductWrite name="test" price="50" />
    </div>
      

  );
}

export default AllTheThings;
