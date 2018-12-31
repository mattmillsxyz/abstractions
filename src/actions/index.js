export const selectDesign = name => {
  return {
    type: 'DESIGN_SELECTED',
    payload: name,
  };
};

export const selectPalette = name => {
  return {
    type: 'PALETTE_SELECTED',
    payload: name,
  };
};

export const selectDirection = name => {
  return {
    type: 'DIRECTION_SELECTED',
    payload: name,
  };
};

export const showModal = value => {
  return { type: 'SHOW_MODAL', payload: value };
};
