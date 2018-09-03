import React, { Component } from "react";
import ReactModal from "react-modal";
import AddSeasonForm from '../../components/AddSeasonForm/AddSeasonForm'
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
          <Link to='/account' className="btn btn-primary btn-sm btn-block" onClick={() => this.closeModalandResetForm()}>close modal</Link>
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
            {this.props.currentBattletag.Seasons.map(season => {
              return <div key={season._id} className='subsection'>
                <div className='section text-center'>
                  <p className='margin-bottom-small'>Starting SR: {season.StartingSR}</p>
                  <p>Heros Focused:</p>
                  <p className='margin-bottom-small'>{season.HerosFocused.join(', ')}</p>
                  <div>
                    <Link className='btn btn-primary btn-sm btn-block' to='/season' onClick={() => this.props.currentSeasonActions.selectSeason(season._id)}>open</Link>
                    <Link to='/account' className='btn btn-danger btn-sm btn-block' onClick={() => this.props.battletagActions.deleteSeason(season._id, this.props.currentBattletag._id)}>delete season</Link>
                  </div>
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