import React, { Component } from "react";
import ReactModal from "react-modal";
import AddSeasonForm from '../../components/AddSeasonForm/AddSeasonForm'
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

class Account extends Component {
  componentDidMount() {

  }

  componentWillMount() {
    ReactModal.setAppElement("body");
  }
  closeModalandResetForm = () => {
    this.props.formActions.seasonFormActions.resetSeasonForm()
    this.props.modalActions.closeModal()
  }
  render() {
    return (
      <div className="container container--active-account">
        <ReactModal isOpen={this.props.showModal} style={modalStyles}>
          <AddSeasonForm {...this.props} />
          <button className="btn btn--close-modal" onClick={() => this.closeModalandResetForm()}>Close modal</button>
        </ReactModal>

        <div className='section'>
          {this.props.currentBattletag ? 
          <div>
            <h2><p>Selected Battletag: {this.props.currentBattletag.Battletag} </p><p> Seasons Tracked: {this.props.currentBattletag.Seasons.length}</p></h2>
          </div>
           : <h2>Battletag: 'Error'</h2>}

          {this.props.currentBattletag.Seasons.length ?
            this.props.currentBattletag.Seasons.map(season => {
              return <div className='section'>
                <p>Starting SR: {season.StartingSR}</p>
                <p>Heros Focused this Season: {season.HerosFocused.join(', ')}</p>
              </div>
            })

            :
            <div className='section'>
              <p>We don't have any Seasons for this Battletag. Add one to Start tracking a Season!</p>
            </div>
          }
          <Link to='/' className='nav-link'>Go Back</Link>
        </div>
      </div>
    );
  }
}

export default Account;