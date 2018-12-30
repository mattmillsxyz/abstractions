export const selectDesign = name => {
  return {
    type: 'DESIGN_SELECTED',
    payload: name
  };
};

export const selectPalette = name => {
  return {
    type: 'PALETTE_SELECTED',
    payload: name
  };
};
