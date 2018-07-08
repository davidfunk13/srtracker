import React, { Component } from "react";
import ReactModal from "react-modal";
import { connect } from 'react-redux';
import AddGameForm from '../../components/AddGameForm/AddGameForm';
import { bindActionCreators } from "redux";
import * as activeAccountActionCreators from '../../actions/activeAccountActions';
import * as modalActionCreators from "../../actions/modalActions";
import * as accountActionCreators from '../../actions/accountActions';
import * as addSeasonFormActionCreators from '../../actions/addSeasonFormActions';
import * as addGameFormActionCreators from '../../actions/addGameFormActions';
import { Link } from 'react-router-dom'

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
    this.props.activeAccountActions.getActiveSeason(this.props.activeAccount.seasonIdForLookup)
  }
  componentWillMount() {
    ReactModal.setAppElement("body");
  }
  render() {
    return (
      <div className="container">
        <ReactModal isOpen={this.props.showModal} style={modalStyles}>
        <AddGameForm {...this.props} />
          <button
            className="btn btn--close-modal"
            onClick={() => this.props.modalActions.closeModal()}
          >
            close modal
          </button>
        </ReactModal>
        <h1 className="heading u-margin-bottom-small">Season Page! {this.props.profile.name}</h1>
        <button onClick={() => { this.props.modalActions.openModal() }}>Add a game to this Season!</button>
        <div className='season'>
          <p>Battletag: {this.props.activeAccount.seasonData.BattleTagOwnership}</p>
          <p>Starting SR: {this.props.activeAccount.seasonData.StartingSR}</p>
          <p>Heros Focused: {this.props.activeAccount.seasonData.HerosFocused}</p>
          <div className='game-table'>
            <p>Games will map here</p>
          </div>
        </div>
        <Link to='/account'>GO BACK TO SAVED SEASONS</Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    showModal: state.showModal,
    accounts: state.accounts,
    activeAccount: state.activeAccount,
    addSeasonForm: state.addSeasonForm,
    addGameForm: state.addGameForm
  };
}

function mapDispatchToProps(dispatch) {
  return {
    modalActions: bindActionCreators(modalActionCreators, dispatch),
    accountActions: bindActionCreators(accountActionCreators, dispatch),
    activeAccountActions: bindActionCreators(activeAccountActionCreators, dispatch),
    addSeasonFormActions: bindActionCreators(addSeasonFormActionCreators, dispatch),
    addGameFormActions: bindActionCreators(addGameFormActionCreators, dispatch),
  }
}
export default
  connect(mapStateToProps, mapDispatchToProps)(
    Season
  );