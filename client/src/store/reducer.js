import * as actionCreators from '../actions';

const initialState = {
  cars: [],
  manufacturers: [],
  colors: [],
  selectedColor: '',
  selectedManufacturer: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionCreators.GET_CARS:
      return {
        ...state,
        cars: action.cars
      };

    case actionCreators.GET_COLORS:
      return {
        ...state,
        colors: action.colors
      };

    case actionCreators.GET_MANUFACTURERS:
      console.log('ACTION from MANUFACTURERS SWITCH', action.manufacturers);
      return {
        ...state,
        manufacturers: action.manufacturers
      };

    case actionCreators.SELECT_COLOR:
      console.log('FROM COLOR CHANGER SWITCH', state.cars);
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
