import React, { Component } from "react";
import ReactModal from "react-modal";
import { Link } from 'react-router-dom'
import AddGameForm from '../../components/AddGameForm/AddGameForm'

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
console.log(this.props)
  }
  componentWillMount() {
    ReactModal.setAppElement("body");
  }
  render() {
    return (
      <div className="container container--season">
        <ReactModal isOpen={this.props.showModal} style={modalStyles}>
        <AddGameForm {...this.props} />
          <button className="btn btn--close-modal" onClick={() => this.props.modalActions.closeModal()}>close modal</button>
        </ReactModal>
        <div className='section active-season'>
          <h1>Active Season</h1>
          <div className='section active-season--cell'>
            {this.props.currentSeason ?
              <div>  
                <p>Battletag: {this.props.currentSeason.Battletag} </p>
                <p>Starting SR: {this.props.currentSeason.StartingSR} </p>
                <p>Heros Focused: {this.props.currentSeason.HerosFocused.join(', ')} </p>
              </div>
              :
              <div>
                <p>Battletag: Loading... </p>
                <p>Starting SR: Loading... </p>
                <p>Heros Focused: Loading... </p>
              </div>
            }
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

export default Season;
