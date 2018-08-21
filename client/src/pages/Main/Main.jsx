import React, { Component } from "react";
import ReactModal from "react-modal";
import BattleTag from "../../components/AddBattletagForm/BattleTag/BattleTag";

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
    this.props.currentUserActions.createUser({ auth0Uid: this.props.profile.sub })
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
          <BattleTag {...this.props} />
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
          {this.props.currentUser.Battletags.length ?
            <div>
              <h2>Battletags:</h2>
              {this.props.currentUser.Battletags.map(Battletag => {
                return <div key={Battletag._id} className='nav-link nav-link--battletag'>
                  <Link to='/account' onClick={() => this.props.battletagActions.selectBattletag(Battletag._id)}><p>{Battletag.Battletag}</p></Link>
                  <Link to='/'><p>Delete</p></Link>
                </div>
              })}
            </div>
            :
            <div className='section'>
              <p>We dont have any Battletags stored for you. Click the button to add one!</p>
            </div>}
        </div>
      </div>
    );
  }
}

export default Main;
