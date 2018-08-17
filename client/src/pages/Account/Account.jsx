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

        <div>
          {this.props.currentBattletag ?
            <div className='section main-info '>
              <h2 className='custom-heading__seasons-box'><p className='custom-heading__seasons-box custom-heading__seasons-box--selected-battletag'>Selected Battletag: {this.props.currentBattletag.Battletag} </p><p className='custom-heading__seasons-box custom-heading__seasons-box--seasons-tracked'> Seasons Tracked: {this.props.currentBattletag.Seasons.length}</p></h2>
              <Link to='/account' onClick={() => this.props.modalActions.openModal()}> <p className='nav-link nav-link--open-modal__battletag'>Create a Season</p>  </Link>
            </div>
            : <h2>Battletag: 'Error'</h2>}

          {this.props.currentBattletag.Seasons.length ?
            <div className='section seasons'>
            <h2 className='u-margin-bottom-small'>Saved Seasons:</h2>
              {this.props.currentBattletag.Seasons.map(season => {
                return <div className='subsection'>
                  <div className='season season--cell'>
                    <p>Starting SR: {season.StartingSR}</p>
                    <p>Heros Focused this Season: {season.HerosFocused.join(', ')}</p>
                    <Link to='/season' key={season._id} onClick={()=> this.props.currentSeasonActions.selectSeason(season._id)} className='nav-link nav-link--open' >Open</Link>
                  </div>
                </div>
              })}
              <Link to='/' className='nav-link nav-link--go-back'>Go Back</Link>
            </div>
            :
            <div className='section seasons'>
              <p className='section u-margin-bottom-small'>We don't have any Seasons for this Battletag. Add one to Start tracking a Season!</p>
              <Link to='/' className='nav-link nav-link--go-back'>Go Back</Link>
            </div>
          }

        </div>
      </div>
    );
  }
}

export default Account;