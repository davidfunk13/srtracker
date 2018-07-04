import React, { Component } from "react";
import ReactModal from "react-modal";
import BattleTag from "../../components/AddAccountForm/BattleTag/BattleTag";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from "redux";
import * as modalActionCreators from "../../actions/modalActions";
import * as accountActionCreators from '../../actions/accountActions';
import * as activeAccountActionCreators from '../../actions/activeAccountActions';
import * as seasonActionCreators from '../../actions/seasonActions';
import {Link} from 'react-router-dom';

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

class Main extends Component {
  componentDidMount(){
    if (this.props.accounts.length === 0) {
      this.props.accountActions.getAccounts(this.props.profile.sub);
    }
    console.log(this.props)
  }
  componentWillMount() {
    ReactModal.setAppElement("body");
  }
  componentWillReceiveProps(){
    // this.props.accountActions.getAccounts(this.props.profile.sub)
  }
  render() {
    return (
      <div className="container">
        <ReactModal isOpen={this.props.showModal} style={customStyles}>
          <BattleTag {...this.props} />
          <button
            className="btn btn--close-modal"
            onClick={() => this.props.modalActions.closeModal()}
          >
            close modal
          </button>
        </ReactModal>
        <h1 className="heading u-margin-bottom-small">Thank you for logging in! {this.props.profile.name}</h1>
        <button onClick={() => {this.props.modalActions.openModal()}}>Track Account</button>
        {!Array.isArray(this.props.accounts) ||
              !this.props.accounts.length ? (
                <div className="seasons__no">
                {console.log(this.props)}
                  <p>We have no accounts saved for you.</p>
                  <p>Please see above to start tracking a new one!</p>
                </div>
              ) : (
                <div className="seasons__yes">
                  <h2>You have a season saved with us! Your seasons:</h2>
                  {this.props.accounts.map(accounts => {
                    return (
                      <div
                        className="season__yes--saved-account u-margin-top-small"
                        key={accounts._id}
                      >
                        <div>Your uid: {accounts.uid}</div>
                        <div>
                          <h2>BattleTag:</h2>
                          <p>{accounts.BattleTag}</p>
                           <Link to='/account'><button onClick={() => this.props.activeAccountActions.selectAccount(accounts._id)}>Open Account</button></Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
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
    seasonActions: bindActionCreators(seasonActionCreators, dispatch)
  };
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Main));
