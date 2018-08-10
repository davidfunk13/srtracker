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
    console.log(this.props.activeAccount.seasonData)
    this.props.activeAccountActions.getActiveSeason(this.props.activeAccount.seasonIdForLookup)
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
            <p>Battletag: {this.props.activeAccount.seasonData.BattletagOwnership}</p>
            <p>Starting SR: {this.props.activeAccount.seasonData.StartingSR}</p>
            <p>Heros Focused: {this.props.activeAccount.seasonData.HerosFocused}</p>
          </div>
          <div className='nav-link nav-link--add-game'>
            <Link to='/season' onClick={() => { this.props.modalActions.openModal() }}>Add a game to this Season!</Link>
          </div>
        </div>
        <div className='section games'>
          <h1 className='u-margin-bottom-small'>Games</h1>
          {this.props.activeAccount.seasonData.Games ?
            this.props.activeAccount.seasonData.Games.length ?
              this.props.activeAccount.seasonData.Games.map(game => {
                return (
                  <div className='section games--cell' key={game._id}>
                    <p>Map: {game.matchMap}</p>
                    <p>|</p>
                    <p>Hero: {game.heroSelected}</p>
                    <p>|</p>
                    <p>Victory: {game.didYouWin}</p>
                    <p>|</p>
                    <p>Post Match SR: {game.postMatchSR}</p>
                  </div>
                )
              }) :
              <div className='section games--none'>
                <p>You havent logged any games yet! Click the button to add a new game to this season</p>
              </div>
            : <div className='section games--none'>
              <p>You havent logged any games yet! Click the button to add a new game to this season</p>
            </div>}
        </div>
        <div className='nav-link nav-link--go-back u-margin-top-small'>
          <Link to='/account'>GO BACK</Link>
        </div>
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
