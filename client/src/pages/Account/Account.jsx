import React, { Component } from "react";
import ReactModal from "react-modal";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from "redux";
import * as modalActionCreators from '../../actions/modalActions';
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

class Account extends Component {
  componentDidMount() {
  }
  componentWillMount() {
    ReactModal.setAppElement("body");
  }
  closeModalandResetForm = () => {
    this.props.modalActions.closeModal()
  }
  render() {
    return (
      <div className="container container--active-account">
        <ReactModal isOpen={this.props.showModal} style={modalStyles}>
          {/* <AddSeasonForm {...this.props} /> */}
          <button className="btn btn--close-modal" onClick={() => this.closeModalandResetForm()}>Close modal</button>
        </ReactModal>
      <div className='section'></div>
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
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Account));
