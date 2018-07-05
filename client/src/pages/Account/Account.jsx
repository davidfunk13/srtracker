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
  componentDidMount() {
    console.log(this.props)
    this.props.activeAccountActions.getActiveAccount(this.props.activeAccount)
  }
  componentWillMount() {
    ReactModal.setAppElement("body");
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
        <div>
          {this.props.activeAccount.Seasons ?
            this.props.activeAccount.Seasons.map(season => {
              return ( 
              <div className='season'>
              <h2>Starting SR:</h2>
              <p>{season.StartingSR}</p>
              <h2>Heros of Focus:</h2>
              <p>{season.HerosFocused}</p>

              </div>
               )
            })
            :
              <p>tes</p>
          }
        </div>

        <button onClick={() => this.props.modalActions.openModal()} >Add Season</button>
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
  };
}

function mapDispatchToProps(dispatch) {
  return {
    modalActions: bindActionCreators(modalActionCreators, dispatch),
    accountActions: bindActionCreators(accountActionCreators, dispatch),
    activeAccountActions: bindActionCreators(activeAccountActionCreators, dispatch),
    seasonActions: bindActionCreators(seasonActionCreators, dispatch),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Account));
