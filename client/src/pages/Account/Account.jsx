import React, { Component } from "react";
import ReactModal from "react-modal";
// import AddSeasonForm from '../../components/AddSeasonForm/AddSeasonForm'

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

export default Account;