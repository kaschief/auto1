import * as actionCreators from '../actions';

const initialState = {
  cars: [],
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
  selectedManufacturer: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionCreators.GET_CARS:
      console.log('ACTION from CARS SWITCH', action.cars);
      return {
        ...state,
        cars: action.cars
      };

    case actionCreators.SELECT_COLOR:
      console.log('FROM COLOR CHANGER SWITCH', state.cars);
      let selected = action.color.toLowerCase();
      return {
        ...state,
        selectedColor: action.color.toLowerCase()
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
