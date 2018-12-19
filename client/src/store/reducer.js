import * as actionCreators from '../actions';

const initialState = {
  cars: ['24', '56', '1', '33', '2222', '1000'],
  manufacturers: ['All manufacturers', 'Honda', 'Tesla', 'Toyota'],
  colors: [
    'All car colors',
    'Red',
    'Yellow',
    'Blue',
    'White',
    'Orange',
    'Pink'
  ],
  selectedColor: '',
  selectedManufacturer: '',
  ascending: true,
  descending: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionCreators.SELECT_COLOR:
      return {
        ...state,
        selectedColor: action.color
      };

    case actionCreators.SELECT_MANUFACTURER:
      return {
        ...state,
        selectedManufacturer: action.manufacturer
      };
    case actionCreators.SORT_MILEAGE:
      console.log('SORT ACTION', action.sort.value);
      if (action.sort.value.includes('Ascending')) {
        return {
          ...state,
          cars: [...state.cars].sort((a, b) => {
            return a - b;
          })
        };
      } else if (action.sort.value.includes('Descending')) {
        return {
          ...state,
          cars: [...state.cars].sort((a, b) => {
            return b - a;
          })
        };
      } else
        return {
          ...state
        };

    default:
      return state;
  }
};

export default reducer;
