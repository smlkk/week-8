import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ item, user }) {
  function handleClick(product) {
    let localFavs = JSON.parse(localStorage.getItem("favoriler")) ?? [];
    let itemIndex = localFavs.findIndex(localItem => product.id === localItem.id);
    if (itemIndex >= 0) {
      localFavs = localFavs.filter(item => item.id !== product.id);
    } else {
      localFavs.push({ id: product.id, title: product.title, price: product.price, image: product.image });
    }
    localStorage.setItem("favoriler", JSON.stringify(localFavs));
  }

  return (
    <div className='col shadow m-1' style={{ width: "12rem" }}>
      <div className="card" style={{ width: "100%", border: "0px" }}>
        <Link to={`/urunler/${item.id}`} className='text-decoration-none'>
          <img className="card-img-top" src={item.image} alt={item.title} style={{ width: "100%", height: "15vw", objectFit: "cover" }} />
        </Link>
        <div className="card-body text-center">
          <Link to={`/urunler/${item.id}`} className='text-decoration-none'>
            <h5 className="card-title text-dark fw-bold fs-6 text-start">{item.title.substring(0, 20)}...</h5>
            <p className='text-secondary text-center w-100'>{item.price} $</p>
          </Link>
          {user &&
            <button className={`btn fav-button ${localStorage.getItem("favoriler") && JSON.parse(localStorage.getItem("favoriler")).some(fav => fav.id === item.id) ? 'active' : ''}`} style={{ border: "0px", outline: "none" }}>
              <i className="bi bi-heart-fill fs-5" onClick={() => handleClick(item)}></i>
            </button>
          }
          <button className='btn add-box fs-4' style={{ border: "0px", outline: "none" }}><i className="bi bi-basket"></i></button>
        </div>
      </div>
    </div>
  );
}
