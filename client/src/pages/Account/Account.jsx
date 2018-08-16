import React, { Component } from "react";
import ReactModal from "react-modal";
import AddSeasonForm from '../../components/AddSeasonForm/AddSeasonForm'

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
          {this.props.currentBattletag ? <h2>Battletag: {this.props.currentBattletag.Battletag}</h2> : <h2>Battletag: 'Error'</h2>}
          <button className="btn btn--close-modal" onClick={() => this.props.modalActions.openModal()}>Open modal</button>
          <div className='section'>
            {this.props.currentBattletag.Seasons.length ?
              this.props.currentBattletag.Seasons.map(season => {
                return <div className='section'>
                  <p>Starting SR: {season.startingSR}</p>
                  <p>Heros Focused this Season: {season.HerosFocused}</p>
                </div>
              })

              :
              <p>We don't have any Seasons for this Battletag. Add one to Start tracking a Season!</p>}
          </div>
        </div>
      </div>
    );
  }
}

export default Account;