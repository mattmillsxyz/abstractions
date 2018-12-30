import React from 'react';

import '../../styles/EditMenu.scss';
import EditDesign from './EditDesign';
import EditPalette from './EditPalette';
import EditDirection from './EditDirection';

const EditMenu = () => {
  return (
    <div className="edit-menu">
      <EditDesign />
      <EditPalette />
      <EditDirection />
    </div>
  );
};

export default EditMenu;
