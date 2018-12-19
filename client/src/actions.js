export const SELECT_COLOR = 'SELECT_COLOR';
export const SELECT_MANUFACTURER = 'SELECT_MANUFACTURER';
export const SORT_MILEAGE = 'SORT_MILEAGE';

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
