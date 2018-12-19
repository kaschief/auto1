import axios from 'axios';
import { toTitleCase } from './helper';

export const GET_CARS = 'GET_CARS';
export const GET_COLORS = 'GET_COLORS';
export const GET_MANUFACTURERS = 'GET_MANUFACTURERS';
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

export const getCarsSuccess = cars => {
  return {
    type: GET_CARS,
    cars
  };
};

///////////

export const getColors = () => {
  return dispatch => {
    return axios
      .get(`${apiURL}/colors`)
      .then(response => {
        let allColors = response.data.colors.map(c => {
          return toTitleCase(c);
        });
        allColors = ['All car colors', ...allColors];
        dispatch(getColorsSuccess(allColors));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const getColorsSuccess = colors => {
  return {
    type: GET_COLORS,
    colors
  };
};

///////

export const getManufacturers = () => {
  return dispatch => {
    return axios
      .get(`${apiURL}/manufacturers`)
      .then(response => {
        let allManufacturers = response.data.manufacturers.map(c => {
          return c.name;
        });
        allManufacturers = ['All manufacturers', ...allManufacturers];
        console.log('--------------->', allManufacturers);
        dispatch(getManufacturersSuccess(allManufacturers));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const getManufacturersSuccess = manufacturers => {
  return {
    type: GET_MANUFACTURERS,
    manufacturers
  };
};

///////
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
