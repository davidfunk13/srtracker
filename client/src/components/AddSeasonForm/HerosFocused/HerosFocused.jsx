import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import * as modalActionCreators from '../../../actions/modalActions';
import * as accountActionCreators from '../../../actions/accountActions';
import * as activeAccountActionCreators from '../../../actions/activeAccountActions';
import * as seasonActionCreators from '../../../actions/seasonActions';

class HerosFocused extends Component {
    state = {
        HerosFocused: "",
        Errors: "",
      };
      handleInputChange = event => {
          let value = event.target.value;
          let name = event.target.name;
          this.setState({
              [name]: value
          });
          console.log(`BattleTag input: ${this.state.HerosFocused}`)
      };

      handleHerosFocused = event => {
          event.preventDefault();
          this.props.seasonActions.nextStepForm();

      }

      handleFormSubmit = event => {
          event.preventDefault();
          let HerosFocused = this.state.HerosFocused;

          console.log(HerosFocused)
      }


    render() {
        return (
            <div className='account-form'>
                {/* <h1 className='u-margin-bottom-small'>Hello {this.props.profile.nickname}</h1> */}
                <form className="account-form__form">
                {this.state.Errors ? <div><p>{this.state.Errors}</p></div> : <div><p>no errors to show</p></div> } 
                    <input
                        className='account-form__form--starting-sr'
                        value={this.state.HerosFocused}
                        name="HerosFocused"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="HerosFocused"
                    />
                    <button className='btn btn--submit-form' onClick={this.handleHerosFocused}>Submit</button>
                </form>
            </div>
        )
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
        activeAccountActions: bindActionCreators(
            activeAccountActionCreators,
            dispatch
        ),
        seasonActions: bindActionCreators(seasonActionCreators, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HerosFocused)