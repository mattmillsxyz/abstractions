import { combineReducers } from 'redux';

const designsReducer = () => {
  return [
    { name: 'Awake', selected: false },
    { name: 'Eclipse', selected: false },
  ];
};

const palettesReducer = () => {
  return [
    { colors: ['#355C7D', '#F67280', '#F8B195'], selected: false },
    { colors: ['#6C5B7B', '#C06C84', '#F67280'], selected: false },
    { colors: ['#2A363B', '#E84A5F', '#FF847C'], selected: false },
    { colors: ['#2A363B', '#FF847C', '#FECEAB'], selected: false },
    { colors: ['#E84A5F', '#99B898', '#FF847C'], selected: false },
  ];
};

const directionsReducer = () => {
  return [
    { name: 'up', selected: false },
    { name: 'down', selected: false },
    { name: 'left', selected: false },
    { name: 'right', selected: false },
  ];
};

const colorsReducer = () => {
  return [
    { name: 'one', value: '', selected: false },
    { name: 'two', value: '', selected: false },
    { name: 'three', value: '', selected: false },
  ];
};

export default combineReducers({
  designs: designsReducer,
  palettes: palettesReducer,
  directions: directionsReducer,
  colors: colorsReducer,
});
