import React, { Component } from "react";
import ReactModal from "react-modal";
// import BattleTag from "../../components/AddAccountForm/BattleTag/BattleTag";

import { Link } from 'react-router-dom';


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

class Main extends Component {
  componentDidMount() {
    console.log(this.props)
    this.props.currentUserActions.createUser(this.props.profile.sub)
  }
  componentWillMount() {
    ReactModal.setAppElement("body");
  }
  componentDidUpdate() {
    console.log(this.props)
  }

  render() {
    return (
      <div className="container container--main">
        <ReactModal isOpen={this.props.showModal} style={modalStyles}>
          {/* <BattleTag {...this.props} /> */}
          <div className='nav-link nav-link--close-modal__battletag'>
            <Link to='/' onClick={() => this.props.modalActions.closeModal()}>Close modal</Link>
          </div>
        </ReactModal>
        <div className='section main-info'>
          <h2>thank you for logging in, {this.props.profile.name}</h2>
          <div className='nav-link nav-link--open-modal__battletag'>
            <Link to='/' onClick={() => { this.props.modalActions.openModal() }}>Track a New BattleTag</Link>
          </div>
        </div>
        <div className='section battletags'>
          {this.props.currentUser.Battletags ?
            <div className='section'>
              {this.props.currentUser.Battletags.map(Battletag => {
               return <p className=''>{Battletag.Battletag}</p>
              })}
            </div>
            :
            <div className='section'>no</div>}
        </div>
      </div>
    );
  }
}

export default Main;
