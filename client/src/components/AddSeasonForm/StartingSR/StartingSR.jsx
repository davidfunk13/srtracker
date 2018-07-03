import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as modalActionCreators from '../../../actions/modalActions';
import * as accountActionCreators from '../../../actions/accountActions';
import * as activeAccountActionCreators from '../../../actions/activeAccountActions';
import * as seasonActionCreators from '../../../actions/seasonActions';
class StartingSR extends Component {
    state = {
        StartingSR: "",
        Errors: "",
      };
      handleInputChange = event => {
          let value = event.target.value;
          let name = event.target.name;
          this.setState({
              [name]: value
          });
          console.log(`BattleTag input: ${this.state.StartingSR}`)
      };

      handleStartingSR = event => {
          event.preventDefault();
          this.props.seasonActions.setStartingSR(this.state.StartingSR);
          this.props.seasonActions.nextStepForm();
      }

      handleFormSubmit = event => {
          event.preventDefault();
          let StartingSR = this.state.StartingSR;
          console.log(StartingSR)
          
      }


    render() {
        return (
            <div className='account-form'>
                {/* <h1 className='u-margin-bottom-small'>Hello {this.props.profile.nickname}</h1> */}
                <form className="account-form__form">
                {this.state.Errors ? <div><p>{this.state.Errors}</p></div> : <div><p>no errors to show</p></div> } 
                    <input
                        className='account-form__form--starting-sr'
                        value={this.state.StartingSR}
                        name="StartingSR"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="StartingSR"
                    />
                    <button className='btn btn--submit-form' onClick={this.handleStartingSR}>Submit</button>
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
        seasonActions: bindActionCreators(seasonActionCreators, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StartingSR)