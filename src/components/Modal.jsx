import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { showModal } from '../actions';
import '../styles/Modal.scss';
import { ReactComponent as CloseIcon } from '../assets/images/close-icon.svg';

const Modal = props => {
  const onDismiss = () => {
    props.showModal(false);
  };

  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-block">
        <div className="close-button" onClick={() => onDismiss()}>
          <CloseIcon />
        </div>
        <div className="modal-title">
          <h2>{props.selectedDesign.name}</h2>
          <p className="artist-name">{props.selectedDesign.artist}</p>
        </div>
        <div
          className="modal-content"
          dangerouslySetInnerHTML={{ __html: props.selectedDesign.description }}
        />
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

const mapStateToProps = state => {
  return {
    selectedDesign: state.selectedDesign,
  };
};

export default connect(
  mapStateToProps,
  { showModal }
)(Modal);
