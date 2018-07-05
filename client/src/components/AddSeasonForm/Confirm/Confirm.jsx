import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as modalActionCreators from '../../../actions/modalActions';
import * as accountActionCreators from '../../../actions/accountActions';
import * as activeAccountActionCreators from '../../../actions/activeAccountActions';
import * as seasonActionCreators from '../../../actions/seasonActions';
import HerosFocused from '../HerosFocused/HerosFocused';
class Confirm extends Component {
    handleSubmit = (SeasonData) => {

        this.props.seasonActions.saveSeason(SeasonData)
        this.props.activeAccountActions.concatNewSeason(SeasonData)
    }
    render() {
        let SeasonData = {
            accountOwnership: this.props.activeAccount._id,
            BattleTagOwnership: this.props.activeAccount.BattleTag,
            StartingSR: this.props.addSeasonForm.StartingSR,
            HerosFocused: this.props.addSeasonForm.HerosFocused,
        }
        console.log(SeasonData)
        return (
            <div className='account-form'>
                <h1 className='u-margin-bottom-small'>{this.props.profile.nickname}, is this information correct?</h1>
                <div className='account-info'>
                    <h2>Battletag: {SeasonData.BattleTag}</h2>
                    <h2>Starting SR: {SeasonData.StartingSR} </h2>
                    <h2>Heros Focused this Season: {SeasonData.HerosFocused.toString()} </h2>
                    <button className='btn btn--save-info' onClick={() => this.handleSubmit(SeasonData)} >Save Info</button>
                </div>
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
        seasonActions: bindActionCreators(seasonActionCreators, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Confirm)