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
          <div className='text-center'>
          <Link to='/account' className="btn btn-primary btn-sm" onClick={() => this.closeModalandResetForm()}>close modal</Link>
          </div>
        </ReactModal>
        <div className='row'>
          <div className='col-12'>
            <Link className='btn btn-primary btn-block margin-bottom-small' role='button' to='/account' onClick={() => this.props.modalActions.openModal()}>create a season</Link>
          </div>
          <div className='col-12'>
            {this.props.currentBattletag ?
              <h1>Information</h1>
              : <h2>Battletag: 'Error'</h2>}
          </div>
        </div>

        {/* checks props for seasons maps to page end line 65 */}
        <div className='section margin-bottom-small'>
          <p className='margin-bottom-small'>Battletag: {this.props.currentBattletag.Battletag}</p>
          <p>Seasons: {this.props.currentBattletag.Seasons.length}</p>
        </div>
        {this.props.currentBattletag.Seasons.length ?
          <div className='section margin-bottom-small'>
            {this.props.currentBattletag.Seasons.map(season => {
              return <div key={season._id}>

                <div className='text-center margin-bottom-small'>
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
          </div> :
          <div className='section margin-bottom-small'>
              <p className='margin-bottom-small'>We don't have anything for this Battletag.</p>
              <p className='margin-bottom-small'>Please add a season to record your progress.</p>
            </div>}
        <Link className='btn btn-primary btn-block' role='button' to='/'>go back</Link>
      </div>
    );
  }
}

export default Account;