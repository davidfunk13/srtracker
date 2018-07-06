import React, { Component } from 'react';
import StartingSR from './StartingSR/StartingSR';
import HerosFocused from './HerosFocused/HerosFocused';
import Confirm from './Confirm/Confirm';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as modalActionCreators from '../../actions/modalActions';
// import * as accountActionCreators from '../../actions/accountActions';
// import * as activeAccountActionCreators from '../../actions/activeAccountActions';
// import * as addSeasonFormActionCreators from '../../actions/addSeasonFormActions';

class AddSeasonForm extends Component {
    componentDidMount(){
        console.log(this.props.addSeasonForm.step)
    }

    render() {
        let step = this.props.addSeasonForm.step
        switch (step) {
            case 1:
                step = <StartingSR {...this.props} />
                break;
            case 2:
                step = <HerosFocused {...this.props}/>
                break;
            case 3:
                step = <Confirm {...this.props} />
                break;
            default:
                break;
        }
        return (
            <div>
                {step}
            </div>
        )
    }
}

// function mapStateToProps(state) {
//     return {
//         showModal: state.showModal,
//         accounts: state.accounts,
//         activeAccount: state.activeAccount,
//         addSeasonForm: state.addSeasonForm
//     };
// }

// function mapDispatchToProps(dispatch) {
//     return {
//         modalActions: bindActionCreators(modalActionCreators, dispatch),
//         accountActions: bindActionCreators(accountActionCreators, dispatch),
//         activeAccountActions: bindActionCreators(activeAccountActionCreators, dispatch),
//         // addSeasonFormActions: bindActionCreators(addSeasonFormActionCreators, dispatch)
//     }
// }
export default AddSeasonForm