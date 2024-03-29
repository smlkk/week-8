import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Product() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        if (!response.ok) {
          throw new Error(`Error fetching product: ${response.statusText}`);
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, [productId]);

  return (
    <>
      <div className="d-flex flex-wrap gap-2">
        <div className="col">
          <img src={product.image} className='img-fluid border-0 w-50' alt={product.title} />
        </div>
        <div className="col">
          <div className="row">
            <h4 className='text-start px-0'>{product.title}</h4>
          </div>
          <div className="row py-1 fs-6 text-muted text-start">
            {product.description}
          </div>
          <div className="row py-1 text-start">
            <p className='fw-bold w-100 px-0'>Kategori:</p>
            <p className='bg-success text-white rounded p-1 w-25 text-center m-0'>{product.category}</p>
          </div>
          <div className="row py-1 fs-2 text-dark fw-bold text-start">
            {product.price} $
          </div>
        </div>
      </div>
    </>
  );
}
