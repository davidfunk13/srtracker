import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as modalActionCreators from '../../../actions/modalActions';
import * as accountsSavedFormActionCreators from '../../../actions/accountsSavedActions';
class Confirm extends Component {

    render() {
        let HerosArr = this.props.accountsSavedForm.accountsSaved['0'].HerosFocused
        let account = {
            uid: this.props.profile.sub,
            Nickname: this.props.profile.nickname,
            BattleTag: this.props.accountsSavedForm.accountsSaved['0'].BattleTag,
            StartingSR: this.props.accountsSavedForm.accountsSaved['0'].StartingSR,
            HerosFocused: HerosArr,
        }
        return (
            <div className='account-form'>
                <h1 className='u-margin-bottom-small'>{this.props.profile.nickname}, is this information correct?</h1>
                <div className='account-info'>
                    <h2>Battletag: {account.BattleTag}</h2>
                    <h2>Starting SR: {account.StartingSR}</h2>
                    <h2>Heros Focused this Season: {account.HerosFocused.toString()}</h2>
                    <button className='btn btn--save-info' onClick={() => this.props.accountsSavedFormActions.saveAccount(account)}>Save Info</button>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        showModal: state.showModal,
        accountsSavedForm: state.accountsSavedForm,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        modalActions: bindActionCreators(modalActionCreators, dispatch),
        accountsSavedFormActions: bindActionCreators(accountsSavedFormActionCreators, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Confirm)