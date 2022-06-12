import { callAPI } from './network';
// import * from 'fs';

function RestaurantRepository() {
  const fetchRestaurant = async () => {
    const data = await callAPI({
      url: '/restaurant',
      method: 'GET',
      headers: {
        'content-type': 'application/json; charset=utf-8'
      },
    });
    return data;
  };

  return {
    fetchRestaurant
  };

}

export default RestaurantRepository();
