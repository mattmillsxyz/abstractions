import React from 'react';

import '../../styles/EditMenu.scss';
import EditDesign from './EditDesign';
import EditPalette from './EditPalette';

const EditMenu = () => {
  return (
    <div className="edit-menu">
      <EditDesign />
      <EditPalette />
      <EditDesign />
      <EditDesign />
    </div>
  );
};

export default EditMenu;
