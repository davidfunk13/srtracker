import React, { Component } from "react";
import ReactModal from "react-modal";
import BattleTag from "../../components/AddAccountForm/BattleTag/BattleTag";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from "redux";
import * as activeAccountActionCreators from '../../actions/activeAccountActions';
import * as modalActionCreators from "../../actions/modalActions";
import * as accountActionCreators from '../../actions/accountActions';
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

class Main extends Component {
  componentDidMount() {
    this.props.accountActions.getAccounts(this.props.profile.sub);
    console.log(`COMPONENT DID MOUNT: `)
    console.log(this.props);
  }
  componentWillMount() {
    ReactModal.setAppElement("body");
  }
  componentDidUpdate() {
    console.log(`COMPONENT DID UPDATE`)
    console.log(this.props)
  }

  render() {
    return (
      <div className="container">
        <ReactModal isOpen={this.props.showModal} style={modalStyles}>
          <BattleTag {...this.props} />
          <button
            className="btn btn--close-modal"
            onClick={() => this.props.modalActions.closeModal()}
          >
            close modal
          </button>
        </ReactModal>
        <h1 className="heading u-margin-bottom-small">Thank you for logging in! {this.props.profile.name}</h1>
        <button className='btn' onClick={() => { this.props.modalActions.openModal() }}>Track a New BattleTag</button>
        {!Array.isArray(this.props.accounts) ||
          !this.props.accounts.length ? (
            <div className="battletag__no">
              <p>We have no accounts saved for you.</p>
              <p>Please see above to start tracking a new one!</p>
            </div>
          ) : (
            <div className="battletag__yes">
              <h2 className='u-margin-top-small'>You have a BattleTag being tracked with us! Your BattleTags:</h2>
              {this.props.accounts.map(accounts => {
                return (
                  <div
                    className="seasons__yes--saved-account u-margin-top-small"
                    key={accounts._id}
                  >
                    <p>BattleTag:</p>
                    <p>{accounts.BattleTag}</p>
                    <Link to='/account'><button className='btn btn--open-battletag' onClick={() => this.props.activeAccountActions.selectAccount(accounts._id)}>Open Account</button></Link>
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
  };
}

function mapDispatchToProps(dispatch) {
  return {
    modalActions: bindActionCreators(modalActionCreators, dispatch),
    accountActions: bindActionCreators(accountActionCreators, dispatch),
    activeAccountActions: bindActionCreators(activeAccountActionCreators, dispatch),
  };
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Main));
