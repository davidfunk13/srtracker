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
    console.log(this.props);
  }
  componentWillMount() {
    ReactModal.setAppElement("body");
  }
  componentDidUpdate() {
    console.log(this.props)
  }

  render() {
    return (
      <div className="container container--main">
        <ReactModal isOpen={this.props.showModal} style={modalStyles}>
          <BattleTag {...this.props} />
          <div className='nav-link nav-link--close-modal__battletag'>
            <Link to='/' onClick={() => this.props.modalActions.closeModal()}>Close modal</Link>
          </div>
        </ReactModal>
        <div className='section main-info'>
          <h2>thank you for logging in, {this.props.profile.name}</h2>
          <div className='nav-link nav-link--open-modal__battletag'>
            <Link to='/' onClick={() => { this.props.modalActions.openModal() }}>Track a New BattleTag</Link>
          </div>
        </div>
        <div className='section battletags'>
          {!Array.isArray(this.props.accounts) ||
            !this.props.accounts.length ? (
              <div className='section battletags battletags__no'>
                <p>We have no accounts saved for you.</p>
                <p>Please see above to start tracking a new one!</p>
              </div>
            ) : (
              <div className='battletags battletags__yes'>
                <h2 className='u-margin-bottom-small'>Your BattleTags:</h2>
                <div className='battletags battletags__yes battletags__yes--flex-container'>
                  {this.props.accounts.map(accounts => {
                    return (
                      <div className='nav-link nav-link--battletag' key={accounts._id}>
                        <Link to='/account' onClick={() => this.props.activeAccountActions.selectAccount(accounts._id)}>{accounts.BattleTag}</Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
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
