import { combineReducers } from 'redux';

const designsReducer = () => {
  return [
    { name: 'Epoch', artist: 'ISO50' },
    { name: 'Eclipse', artist: 'Matt Mills' },
    { name: 'Harran II', artist: 'Frank Stella' }
  ];
};

const selectedDesignReducer = (
  selectedDesign = { name: 'Epoch', artist: 'ISO50' },
  action
) => {
  if (action.type === 'DESIGN_SELECTED') {
    return action.payload;
  }
  return selectedDesign;
};

const palettesReducer = () => {
  return [
    { colors: ['#355C7D', '#F67280', '#F8B195'] },
    { colors: ['#6C5B7B', '#C06C84', '#F67280'] },
    { colors: ['#2A363B', '#E84A5F', '#FF847C'] },
    { colors: ['#2A363B', '#FF847C', '#FECEAB'] },
    { colors: ['#E84A5F', '#99B898', '#FF847C'] }
  ];
};

const directionsReducer = () => {
  return [
    { name: 'up', selected: false },
    { name: 'down', selected: false },
    { name: 'left', selected: false },
    { name: 'right', selected: false }
  ];
};

const colorsReducer = () => {
  return [
    { name: 'one', value: '', selected: false },
    { name: 'two', value: '', selected: false },
    { name: 'three', value: '', selected: false }
  ];
};

export default combineReducers({
  designs: designsReducer,
  selectedDesign: selectedDesignReducer,
  palettes: palettesReducer,
  directions: directionsReducer,
  colors: colorsReducer
});
