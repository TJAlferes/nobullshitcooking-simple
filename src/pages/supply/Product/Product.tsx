import axios from 'axios';
import React, { useEffect, useState } from 'react';

import AddToCartButton from '../AddToCartButton/AddToCartButton';
import './product.css';

const endpoint = '';

// TO DO: use ElasticSearch

const Product = ({ match }) => {
  const [ dataProduct, setDataProduct ] = useState({});

  useEffect(() => {
    const fetchDataProduct = async () => {
      const res = await axios.get(`${endpoint}/product/${match.params}`);
      setDataProduct(res.data);
    };
    fetchDataProduct();
  }, []);

  return (
    <div className={`product one-column-a ${oneColumnATheme}`}>

      <div className="product__top">

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