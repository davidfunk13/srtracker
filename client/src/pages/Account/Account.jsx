import React, { Component } from "react";
import ReactModal from "react-modal";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from "redux";
import * as activeAccountActionCreators from '../../actions/activeAccountActions';
import * as modalActionCreators from "../../actions/modalActions";
import * as accountActionCreators from '../../actions/accountActions';
import * as addSeasonFormActionCreators from '../../actions/addSeasonFormActions';
import { Link } from 'react-router-dom'
import AddSeasonForm from "../../components/AddSeasonForm/AddSeasonForm";

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
    this.props.activeAccountActions.getActiveAccount(this.props.activeAccount.idForLookup);
  }
  componentWillMount() {
    ReactModal.setAppElement("body");
  }
  render() {
    return (
      <div className="container">
        <ReactModal isOpen={this.props.showModal} style={modalStyles}>
          <AddSeasonForm {...this.props} />
          <button
            className="btn btn--close-modal"
            onClick={() => this.props.modalActions.closeModal()}
          >
            close modal
          </button>
        </ReactModal>
        <button onClick={() => { this.props.modalActions.openModal() }}>Add a new Season!</button>
        {this.props.activeAccount.accountData._id ?
          <div className='active-account--yes u-margin-top-small'>
            <p className='u-margin-top-small'>Account Selected:</p>
            <p className='u-margin-bottom-small'>{this.props.activeAccount.accountData.BattleTag}</p>
            <p className='u-margin-bottom-small'>Seasons tracked for this account:</p>
            {this.props.activeAccount.accountData.Seasons.length ?
              this.props.activeAccount.accountData.Seasons.map(seasons => {
                return (
                  <div key={seasons._id} className='season'>
                    <h2>Season:</h2>
                    <p>Starting SR: {seasons.StartingSR}</p>
                    <p>Heros Focused: {seasons.HerosFocused.toString()}</p>
                    <Link to= '/season'><button className='btn' onClick={()=> this.props.activeAccountActions.selectSeason(seasons._id)}>Open season</button></Link>
                  </div>
                )
              })
              :
              <div>NO :(</div>
            }
          </div>
          :
          <div className='active-account--no'>NO :(</div>
        }
        <Link to='/'>GO BACK</Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    showModal: state.showModal,
    accounts: state.accounts,
    activeAccount: state.activeAccount,
    addSeasonForm: state.addSeasonForm
  };
}

function mapDispatchToProps(dispatch) {
  return {
    modalActions: bindActionCreators(modalActionCreators, dispatch),
    accountActions: bindActionCreators(accountActionCreators, dispatch),
    activeAccountActions: bindActionCreators(activeAccountActionCreators, dispatch),
    addSeasonFormActions: bindActionCreators(addSeasonFormActionCreators, dispatch),
  }
}
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Account));
