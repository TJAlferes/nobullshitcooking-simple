import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './product.css';
import AddToCartButton from '../AddToCartButton/AddToCartButton';

const endpoint = '';

const Product = props => {
  const [ dataProduct, setDataProduct ] = useState({});

  useEffect(() => {
    const fetchDataProduct = async () => {
      const res = await axios.get(`${endpoint}/product/${props.match.params}`);
      setDataProduct(res.data);
    };
    fetchDataProduct();
  }, []);

  return (
    <div className="product">
      <div className="top">
        <div className="top-left">
          <div></div>
          <div>
            <h1>{dataProduct.product_name}</h1>
          </div>
        </div>
        <div className="top-right">
          <div className="somethingelse">
            <AddToCartButton itemId={dataProduct.product_id} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;