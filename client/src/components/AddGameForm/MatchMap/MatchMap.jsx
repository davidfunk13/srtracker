import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as modalActionCreators from '../../../actions/modalActions';
import * as accountActionCreators from '../../../actions/accountActions';
import * as activeAccountActionCreators from '../../../actions/activeAccountActions';
import * as addSeasonFormActionCreators from '../../../actions/addSeasonFormActions';

class MatchMap extends Component {
    state = {
        matchMap: "",
        Errors: "",
      };
      handleInputChange = event => {
          let value = event.target.value;
          let name = event.target.name;
          this.setState({
              [name]: value
          });
          console.log(`BattleTag input: ${this.state.matchMap}`)
      };

      handleMatchMap = event => {
          event.preventDefault();
          this.props.addGameFormActions.setMatchMap(this.state.matchMap);
          this.props.addGameFormActions.nextStepGameForm();
      }

    render() {
        return (
            <div className='account-form'>
                {/* <h1 className='u-margin-bottom-small'>Hello {this.props.profile.nickname}</h1> */}
                <form className="account-form__form">
                {this.state.Errors ? <div><p>{this.state.Errors}</p></div> : <div><p>no errors to show</p></div> } 
                    <input
                        className='account-form__form--starting-sr'
                        value={this.state.matchMap}
                        name="matchMap"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="matchMap"
                    />
                    <button className='btn btn--submit-form' onClick={this.handleMatchMap}>Submit</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(MatchMap)