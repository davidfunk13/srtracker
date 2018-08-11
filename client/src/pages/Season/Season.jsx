import React, { Component } from "react";
import ReactModal from "react-modal";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as modalActionCreators from "../../actions/modalActions";
import { Link } from 'react-router-dom'

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "60%",
    height: "60%",
    border: "1px solid black"
  }
};

class Season extends Component {
  componentDidMount() {
  }
  componentWillMount() {
    ReactModal.setAppElement("body");
  }
  render() {
    return (
      <div className="container container--season">
        <ReactModal isOpen={this.props.showModal} style={modalStyles}>
          <button className="btn btn--close-modal" onClick={() => this.props.modalActions.closeModal()}>close modal</button>
        </ReactModal>
        <div className='section active-season'>
          <h1>Active Season</h1>
          <div className='section active-season--cell'>
            <p>Battletag: </p>
            <p>Starting SR: </p>
            <p>Heros Focused:</p>
          </div>
          <div className='nav-link nav-link--add-game'>
            <Link to='/season' onClick={() => { this.props.modalActions.openModal() }}>Add a game to this Season!</Link>
          </div>
        </div>
        <div className='section games'>
          <h1 className='u-margin-bottom-small'>Games</h1>
        </div>
        <div className='nav-link nav-link--go-back u-margin-top-small'>
          <Link to='/account'>GO BACK</Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    showModal: state.showModal,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    modalActions: bindActionCreators(modalActionCreators, dispatch),
  }
}
export default
  connect(mapStateToProps, mapDispatchToProps)(Season);
