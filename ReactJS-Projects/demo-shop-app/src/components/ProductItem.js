import React, { useState } from 'react';

import ProductDate from './ProductDate';
import Card from './Card';
import './ProductItem.css';

const ProductItem = (props) => {

  // to update the UI - we generally use state concept
  // useState hook 
  const [title, setTitle] =  useState(props.title);

  // by the use of props we can use event handlings
  // addEventListener is imperative approach - 
  // onClickHandler is declarative approach -
  
  function clickHandler() {
    //title = "Popcorn";
    setTitle("Popcorn"); 
    // this have two functionality - 
    // 1. update the title value 
    // 2. re-render the page for displaying the changes in UI
    console.log("button clicked");
  }
  

  return (
    <Card className='product-item'>
      <ProductDate date={props.date} />
      <div className='product-item__description'>
        <h2>{title}</h2>
      </div>
      <button onClick={clickHandler}>Add to Cart</button>
    </Card>
  );
}

export default ProductItem;