import { combineReducers } from 'redux';
import designs from '../data/designs';
import palettes from '../data/palettes';

const designsReducer = () => {
  return designs;
};

const selectedDesignReducer = (selectedDesign = designs[2], action) => {
  if (action.type === 'DESIGN_SELECTED') {
    return action.payload;
  }
  return selectedDesign;
};

const palettesReducer = () => {
  return palettes;
};

const selectedPaletteReducer = (selectedPalette = palettes[4], action) => {
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
    { name: 'right', value: '→' },
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

const modalReducer = (showModal = false, action) => {
  if (action.type === 'SHOW_MODAL') {
    return action.payload;
  }
  return showModal;
};

export default combineReducers({
  designs: designsReducer,
  selectedDesign: selectedDesignReducer,
  palettes: palettesReducer,
  selectedPalette: selectedPaletteReducer,
  directions: directionsReducer,
  selectedDirection: selectedDirectionReducer,
  showModal: modalReducer,
});
