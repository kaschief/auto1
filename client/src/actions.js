import axios from 'axios';

export const GET_CARS = 'GET_CARS';
export const SELECT_COLOR = 'SELECT_COLOR';
export const SELECT_MANUFACTURER = 'SELECT_MANUFACTURER';
export const SORT_MILEAGE = 'SORT_MILEAGE';

const apiURL = 'http://localhost:3001';

export const getCars = () => {
  return dispatch => {
    return axios
      .get(`${apiURL}/cars`)
      .then(response => {
        console.log('RESPONSE FROM GET CARS', response.data.cars);
        dispatch(getCarsSuccess(response.data.cars));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const getCarsSuccess = data => {
  return {
    type: GET_CARS,
    data
  };
};

export const selectColor = color => {
  return {
    type: SELECT_COLOR,
    color
  };
};

export const selectManufacturer = manufacturer => {
  return {
    type: SELECT_MANUFACTURER,
    manufacturer
  };
};

export const sortMileage = sort => {
  return {
    type: SORT_MILEAGE,
    sort
  };
};
