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
      <div className="container">
        <ReactModal isOpen={this.props.showModal} style={modalStyles}>
          <BattleTag {...this.props} />
          <div className='btn btn-primary'>
            <Link to='/' onClick={() => this.props.modalActions.closeModal()}>close modal</Link>
          </div>
        </ReactModal>
        <div className='row'>
          <div className='col-12 text-center'>
            <h3 className='margin-bottom-small'>{this.props.profile.name}</h3>
            <div className='btn btn-primary btn-block margin-bottom-small'>
              <Link to='/' onClick={() => { this.props.modalActions.openModal() }}>track a new battletag</Link>
            </div>
          </div>
        </div>
        <div className='row'>
          {this.props.currentUser.Battletags.length ?
            <div className='col-12'>
              <h2>Battletags:</h2>
              {this.props.currentUser.Battletags.map(Battletag => {
                return <div key={Battletag._id} className='nav-link nav-link--battletag'>
                  <Link to='/account' onClick={() => this.props.battletagActions.selectBattletag(Battletag._id)}><p>{Battletag.Battletag}</p></Link>
                  <Link to='/' onClick={() => { this.props.currentUserActions.deleteBattletag(Battletag._id, this.props.currentUser.userId) }}><p>Delete</p></Link>
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
