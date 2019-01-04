import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Modal from './Modal';

import '../styles/Header.scss';
import { showModal } from '../actions';
import { ReactComponent as InfoIcon } from '../assets/images/info-icon.svg';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showShareModal: false,
    };
  }

  toggleShareModal() {
    this.setState({
      showShareModal: !this.state.showShareModal,
    });
  }

  render() {
    return (
      <div className="header">
        <div className="header-inner">
          <Link className="logo" to="/">
            ABSTRACTIONS
          </Link>
          <div onClick={() => this.toggleShareModal()} className="info-button">
            <InfoIcon />
          </div>
        </div>
        {this.state.showShareModal && (
          <Modal onDismiss={() => this.toggleShareModal()} />
        )}
      </div>
    );
  }
}

export default connect(
  null,
  { showModal }
)(Header);
