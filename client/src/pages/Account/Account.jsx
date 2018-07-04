import React, { Component } from "react";
import { connect } from "react-redux";
import ReactModal from "react-modal";
import StartingSR from '../../components/AddSeasonForm/StartingSR/StartingSR';
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as modalActionCreators from "../../actions/modalActions";
import * as accountActionCreators from "../../actions/accountActions";
import * as activeAccountActionCreators from "../../actions/activeAccountActions";
import * as seasonActionCreators from '../../actions/seasonActions';
import * as activeSeasonActionCreators from '../../actions/activeSeasonActions';

import { Link } from "react-router-dom";
import HerosFocused from "../../components/AddSeasonForm/HerosFocused/HerosFocused";
import Confirm from '../../components/AddSeasonForm/Confirm/Confirm';

const customStyles = {
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
  // showSeasons = () => {
    
  //      this.props.activeSeasonActions.getSeasons(this.props.activeAccount._id)
  // }
  componentDidUpdate() {
    console.log('hit')

     }
  componentDidMount() {
    console.log(this.props)
  }
  componentWillMount() {
    ReactModal.setAppElement("body");
  }
shouldComponentUpdate(){
  if (this.props.activeAccount.length === 0  ) {
    console.log(this.props.activeAccount)
    return true;
  }
  if(this.props.activeAccount.length === 1) {
    console.log(this.props.activeAccount)
    return false
  }
  // this.showSeasons()
}

  render() {

    let formStep;
    switch (this.props.addSeasonForm.step) {
      case 1:
        formStep = <StartingSR {...this.props} />
        break;
      case 2:
        formStep = <HerosFocused {...this.props} />
        break;
      case 3:
        formStep = <Confirm {...this.props} />
        break;
      default:
        break;
    }
    return (
      <div className="container">
        <ReactModal isOpen={this.props.showModal} style={customStyles}>
          {formStep}
          <button
            className="btn btn--close-modal"
            onClick={() => this.props.modalActions.closeModal()}
          >
            Close modal
          </button>
        </ReactModal>
        <p className='u-margin-bottom-small'>BattleTag:</p>
        <p>{this.props.activeAccount.BattleTag}</p>
        <p className='u-margin-bottom-small'>Seasons Tracked for this acct:</p>
        <button onClick={() => this.props.modalActions.openModal()} >Add Season</button>
        {this.props.activeAccount.Seasons ? this.props.activeAccount.Seasons.map(season => {
          <div>

            <p>{season}</p>
          </div>
        }) : <p>We dont have any active seasons being tracked for you. Please click Add Season to start tracking!</p>}
        <Link to="/">Go Back</Link>
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
    activeSeason: state.activeSeason,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    modalActions: bindActionCreators(modalActionCreators, dispatch),
    accountActions: bindActionCreators(accountActionCreators, dispatch),
    activeAccountActions: bindActionCreators(activeAccountActionCreators, dispatch),
    seasonActions: bindActionCreators(seasonActionCreators, dispatch),
    activeSeasonActions: bindActionCreators(activeSeasonActionCreators, dispatch),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Account));
