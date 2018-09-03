import React, { Component } from "react";
import ReactModal from "react-modal";
import BattleTag from "../../components/AddBattletagForm/BattleTag/BattleTag";

import { Link } from 'react-router-dom';


const modalStyles = {
  content: {
    top: "50%",
    left: "48%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "90vw",
    height: "auto",
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
      <div className="container">
        <ReactModal isOpen={this.props.showModal} style={modalStyles}>
          <BattleTag {...this.props} />
          <Link className='btn btn-primary btn-sm btn-block' role='button' to='/' onClick={() => this.props.modalActions.closeModal()}>close modal</Link>
        </ReactModal>
        <div className='row'>
          <div className='col-12 text-center'>
            <h3 className='margin-bottom-small'>{this.props.profile.name}</h3>
            <Link className='btn btn-primary btn-block margin-bottom-small' role='button' to='/' onClick={() => { this.props.modalActions.openModal() }}>track a new battletag</Link>
          </div>
        </div>
        <div className='row'>
          {this.props.currentUser.Battletags.length ?
            <div className='col-12'>
              <h2>Battletags:</h2>
              {this.props.currentUser.Battletags.map(Battletag => {
                return <div key={Battletag._id} className='d-flex text-center battletag-section'>
                  <Link className='btn btn-primary btn-block margin-right-small' role='button' to='/account' onClick={() => this.props.battletagActions.selectBattletag(Battletag._id)}>{Battletag.Battletag}</Link>
                  <Link className='btn btn-danger' role='button' to='/' onClick={() => { this.props.currentUserActions.deleteBattletag(Battletag._id, this.props.currentUser.userId) }}>delete</Link>
                </div>
              })}
            </div>
            :
            <div className='col-12'>
              <p className='section'>We dont have any Battletags stored for you. Click the button to add one!</p>
            </div>}
        </div>
      </div>
    );
  }
}

export default Main;
