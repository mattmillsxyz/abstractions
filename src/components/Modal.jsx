import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Twitter, Facebook } from 'react-social-sharing';

import '../styles/Modal.scss';
import { ReactComponent as CloseIcon } from '../assets/images/close-icon.svg';

const Modal = props => {
  const renderTitle = () => {
    if (props.type === 'share') {
      return (
        <div className="modal-title">
          <h2>Share this design</h2>
        </div>
      );
    }
    return (
      <div className="modal-title">
        <h2>{props.selectedDesign.name}</h2>
        <p className="artist-name">{props.selectedDesign.artist}</p>
      </div>
    );
  };

  const renderContent = () => {
    if (props.type === 'share') {
      return (
        <div className="modal-content">
          <Twitter
            solid
            medium
            link={props.shareLink}
            message={props.twitterMessage}
            style={{ borderRadius: 0, color: 'white' }}
          />
          <Facebook
            solid
            medium
            link={props.shareLink}
            style={{ borderRadius: 0, color: 'white' }}
          />
        </div>
      );
    }
    return (
      <div
        className="modal-content"
        dangerouslySetInnerHTML={{ __html: props.selectedDesign.description }}
      />
    );
  };

  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-block">
        <div className="close-button" onClick={() => props.onDismiss()}>
          <CloseIcon />
        </div>
        {renderTitle()}
        {renderContent()}
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

export default connect(mapStateToProps)(Modal);
