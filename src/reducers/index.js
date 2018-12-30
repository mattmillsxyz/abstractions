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
    { name: 1, colors: ['#ad4232', '#211e27', '#e0e3d2'] },
    { name: 2, colors: ['#6C5B7B', '#C06C84', '#F67280'] },
    { name: 3, colors: ['#2A363B', '#E84A5F', '#FF847C'] },
    { name: 4, colors: ['#2A363B', '#FF847C', '#FECEAB'] },
    { name: 5, colors: ['#E84A5F', '#99B898', '#FF847C'] }
  ];
};

const selectedPaletteReducer = (
  selectedPalette = { name: 1, colors: ['#ad4232', '#211e27', '#e0e3d2'] },
  action
) => {
  if (action.type === 'PALETTE_SELECTED') {
    return action.payload;
  }
  return selectedPalette;
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
  selectedPalette: selectedPaletteReducer,
  directions: directionsReducer,
  colors: colorsReducer
});
