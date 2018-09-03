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

  componentWillMount() {
    ReactModal.setAppElement("body");
  }

  closeModalandResetForm = () => {
    this.props.formActions.seasonFormActions.resetSeasonForm()
    this.props.modalActions.closeModal()
  }

  render() {
    return (
      <div className="container">
        <ReactModal isOpen={this.props.showModal} style={modalStyles}>
          <AddSeasonForm {...this.props} />
          <button className="btn btn--close-modal" onClick={() => this.closeModalandResetForm()}>Close modal</button>
        </ReactModal>
        <div className='row'>
          <div className='col-12'>
              <Link className='btn btn-primary btn-block margin-bottom-small' role='button' to='/account' onClick={() => this.props.modalActions.openModal()}>create a season</Link>
          </div>
          <div className='col-12'>
            {this.props.currentBattletag ?
              <h1>seasons</h1>
              : <h2>Battletag: 'Error'</h2>}
          </div>
        </div>

        {/* checks props for seasons maps to page end line 65 */}
        {this.props.currentBattletag.Seasons.length ?
          <div className='section'>
            <h2 className='u-margin-bottom-small'>Saved Seasons:</h2>
            {this.props.currentBattletag.Seasons.map(season => {
              return <div key={season._id} className='subsection'>
                <div className='season season--cell'>
                  <p>Starting SR: {season.StartingSR}</p>
                  <p>Heros Focused this Season: {season.HerosFocused.join(', ')}</p>
                  <Link to='/season' onClick={() => this.props.currentSeasonActions.selectSeason(season._id)} className='nav-link nav-link--open' >Open</Link>
                  <p className='nav-link' onClick={() => this.props.battletagActions.deleteSeason(season._id, this.props.currentBattletag._id)}>Delete Season</p>
                </div>
              </div>
            })}
            {/* <Link className='btn btn-primary' role='button' to='/'>Go Back</Link> */}
          </div> :
          <div className='section'>
            <div className='section margin-bottom-small'>
              <p className='margin-bottom-small'>Battletag: {this.props.currentBattletag.Battletag}</p>
              <p>Seasons: {this.props.currentBattletag.Seasons.length}</p>
            </div>
            <div className='text-center'>
              <p className='margin-bottom-small'>We don't have any Seasons for this Battletag. Add one to Start tracking a Season!</p>
            </div>
             
          </div>}
          <Link className='btn btn-primary btn-block' role='button' to='/'>go back</Link>
      </div>
    );
  }
}

export default Account;