import { combineReducers } from 'redux';

const designsReducer = () => {
  return [
    {
      name: 'Epoch',
      artist: 'Scott Hansen',
      palettes: [1, 2, 3, 4],
      description: `This design is based on the artwork by Scott Hansen, musician (<a href="http://www.tychomusic.com/" target="_blank">Tycho</a>) and artist (<a href="http://blog.iso50.com/" target="_blank">ISO50</a>) that was created for his album titled Epoch. I've been a huge fan of his work and his music has fueled a majority of my coding sessions, so I thought it was fitting to include this piece in the ABSTRACTIONS collection.`,
    },
    {
      name: 'Eclipse',
      artist: 'Matt Mills',
      palettes: [2, 3, 4, 1],
      description:
        'This piece is simply a design I created as a test for this ABSTRACTIONS project. I wanted to see if I could use gradients in the svg shapes, so I created this simple layout and programatically adjusted the gradient based on the selected palette.',
    },
  ];
};

const selectedDesignReducer = (
  selectedDesign = {
    name: 'Eclipse',
    artist: 'Matt Mills',
    palettes: [2, 3, 4, 1],
    description:
      'This piece is simply a design I created as a test for this ABSTRACTIONS project. I wanted to see if I could use gradients in the svg shapes, so I created this simple layout and programatically adjusted the gradient based on the selected palette.',
  },
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
    { name: 2, colors: ['#2A363B', '#E84A5F', '#FF847C'] },
    { name: 3, colors: ['#2A363B', '#FF847C', '#FECEAB'] },
    { name: 4, colors: ['#E84A5F', '#99B898', '#FF847C'] },
  ];
};

const selectedPaletteReducer = (
  selectedPalette = { name: 2, colors: ['#2A363B', '#E84A5F', '#FF847C'] },
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
