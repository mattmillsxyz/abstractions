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
    { name: 1, colors: ['#355C7D', '#F67280', '#F8CA95'] },
    { name: 2, colors: ['#2A363B', '#E84A5F', '#FF847C'] },
    { name: 3, colors: ['#2A363B', '#FF847C', '#FECEAB'] },
    { name: 4, colors: ['#E84A5F', '#99B898', '#FF847C'] }
  ];
};

const selectedPaletteReducer = (
  selectedPalette = { name: 1, colors: ['#355C7D', '#F67280', '#F8CA95'] },
  action
) => {
  if (action.type === 'PALETTE_SELECTED') {
    return action.payload;
  }
  return selectedPalette;
};

const directionsReducer = () => {
  return [
    { name: 'up', value: '↑' },
    { name: 'down', value: '↓' },
    { name: 'left', value: '←' },
    { name: 'right', value: '→' }
  ];
};

const selectedDirectionReducer = (
  selectedDirection = { name: 'up', value: '↑' },
  action
) => {
  if (action.type === 'DIRECTION_SELECTED') {
    return action.payload;
  }
  return selectedDirection;
};

export default combineReducers({
  designs: designsReducer,
  selectedDesign: selectedDesignReducer,
  palettes: palettesReducer,
  selectedPalette: selectedPaletteReducer,
  directions: directionsReducer,
  selectedDirection: selectedDirectionReducer
});
