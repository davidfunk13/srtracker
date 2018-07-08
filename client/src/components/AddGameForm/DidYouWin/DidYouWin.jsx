import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as modalActionCreators from '../../../actions/modalActions';
import * as accountActionCreators from '../../../actions/accountActions';
import * as activeAccountActionCreators from '../../../actions/activeAccountActions';
import * as addSeasonFormActionCreators from '../../../actions/addSeasonFormActions';

class DidYouWin extends Component {
    state = {
        didYouWin: '',
        Errors: "",
      };
      handleInputChange = event => {
          let value = event.target.value;
          let name = event.target.name;
          this.setState({
              [name]: value
          });
          console.log(`BattleTag input: ${this.state.didYouWin}`)
      };

      handleDidYouWin = event => {
          event.preventDefault();
          this.props.addGameFormActions.setDidYouWin(this.state.didYouWin)
          this.props.addGameFormActions.nextStepForm();

      }


    render() {
        return (
            <div className='account-form'>
                {/* <h1 className='u-margin-bottom-small'>Hello {this.props.profile.nickname}</h1> */}
                <form className="account-form__form">
                {this.state.Errors ? <div><p>{this.state.Errors}</p></div> : <div><p>no errors to show</p></div> } 
                    <input
                        className='account-form__form--starting-sr'
                        value={this.state.didYouWin}
                        name="didYouWin"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="didYouWin"
                    />
                    <button className='btn btn--submit-form' onClick={this.handleDidYouWin}>Submit</button>
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
        activeAccountActions: bindActionCreators(activeAccountActionCreators, dispatch),
        addSeasonFormActions: bindActionCreators(addSeasonFormActionCreators, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DidYouWin)