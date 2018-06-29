import React, { Component } from "react";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from "redux";
import * as modalActionCreators from "../../actions/modalActions";
import * as accountActionCreators from '../../actions/accountActions'
import * as activeAccountActionCreators from '../../actions/activeAccountActions'
class Account extends Component {
    componentDidMount(){
        console.log(this.props)
    }
  render() {
    return (
      <div className="account">
      <p>BattleTag:</p>
        <p>{this.props.activeAccount.BattleTag}</p>
        <p>Seasons Tracked for this acct:</p>
        <p>{this.props.activeAccount.Seasons}</p>
      </div>
    );
  }
}
function mapStateToProps(state) {
    return {
      showModal: state.showModal,
      accounts: state.accounts,
      activeAccount: state.activeAccount
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      modalActions: bindActionCreators(modalActionCreators, dispatch),
      accountActions: bindActionCreators(accountActionCreators, dispatch),
      activeAccountActions: bindActionCreators(activeAccountActionCreators, dispatch)
    };
  }
  
  export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(Account));
  
 