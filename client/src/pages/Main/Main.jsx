import React, { Component } from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import * as modalActionCreators from "../../actions/modalActions";
import * as accountActionCreators from '../../actions/accountActions'

class Main extends Component {
  render() {
    return (
      <div className="container">
        <div className='container--logged-out'>
          <h1 className="heading u-margin-bottom-small">Thank you for logging in! {this.props.profile.name}</h1>
          
        </div>
        <a href="/menu"><button className='btn'>Menu</button></a>
      </div>
    );
  }
}
 
function mapStateToProps(state) {
  return {
    showModal: state.showModal,
    accounts: state.accounts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    modalActions: bindActionCreators(modalActionCreators, dispatch),
    accountActions: bindActionCreators(accountActionCreators, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
