import {useState} from 'react';

function Collection({ restaurant }) {
  return (
    <div
     
    >
        Koleksi
        
        {restaurant ? restaurant.map((arr, idx) => (<div>{arr.name}</div>)) : <div>Loading</div>}
    </div>
  );
}

export default Collection;
