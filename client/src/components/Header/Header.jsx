import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import * as modalActionCreators from "../../actions/modalActions";

class Header extends Component {
  componentDidMount() {

  }
  
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1>SR TRACKER</h1>
        </header>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    showModal: state.showModal,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    modalActions: bindActionCreators(modalActionCreators, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
