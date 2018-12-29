export const selectDesign = name => {
  return {
    type: 'DESIGN_SELECTED',
    payload: name
  };
};
