import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as modalActionCreators from '../../../actions/modalActions';
import * as accountActionCreators from '../../../actions/accountActions';
import * as activeAccountActionCreators from '../../../actions/activeAccountActions';
import * as seasonActionCreators from '../../../actions/seasonActions';
class Confirm extends Component {

    render() {
        return (
            <div className='account-form'>
                <h1 className='u-margin-bottom-small'>{this.props.profile.nickname}, is this information correct?</h1>
                <div className='account-info'>
                    <h2>Battletag: </h2>
                    <h2>Starting SR: </h2>
                    <h2>Heros Focused this Season: </h2>
                    <button className='btn btn--save-info' >Save Info</button>
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
        activeAccountActions: bindActionCreators(
            activeAccountActionCreators,
            dispatch
        ),
        seasonActions: bindActionCreators(seasonActionCreators, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Confirm)