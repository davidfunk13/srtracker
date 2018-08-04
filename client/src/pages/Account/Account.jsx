import React, { Component } from "react";
import ReactModal from "react-modal";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from "redux";
import * as activeAccountActionCreators from '../../actions/activeAccountActions';
import * as modalActionCreators from "../../actions/modalActions";
import * as accountActionCreators from '../../actions/accountActions';
import * as addSeasonFormActionCreators from '../../actions/addSeasonFormActions';
import { Link } from 'react-router-dom'
import AddSeasonForm from "../../components/AddSeasonForm/AddSeasonForm";

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "60%",
    height: "60%",
    border: "1px solid black"
  }
};

class Account extends Component {
  componentDidMount() {
    this.props.activeAccountActions.getActiveAccount(this.props.activeAccount.idForLookup);
  }
  componentWillMount() {
    ReactModal.setAppElement("body");
  }
  closeModalandResetForm = () => {
    this.props.modalActions.closeModal()
    this.props.addSeasonFormActions.resetSeasonForm()
  }
  render() {
    return (
      <div className="container container--active-account">
        <ReactModal isOpen={this.props.showModal} style={modalStyles}>
          <AddSeasonForm {...this.props} />
          <button className="btn btn--close-modal" onClick={() => this.closeModalandResetForm()}>Close modal</button>
        </ReactModal>
        {this.props.activeAccount.accountData._id ?
          <div className='active-account'>
            <div className='section active-account active-account--info'>
              <h1 className='u-margin-bottom-small'>Active Account: {this.props.activeAccount.accountData.BattleTag}</h1>
              <div className='nav-link nav-link--add-season'>
                <Link to='/account' className='u-margin-bottom-small' onClick={() => this.props.modalActions.openModal()}>Add New Season</Link>
              </div>
            </div>
            <div className='section season u-margin-top-small'>
              <h1 className='u-margin-bottom-small'>Seasons</h1>
              {this.props.activeAccount.accountData.Seasons.length ?
                this.props.activeAccount.accountData.Seasons.map(seasons => {
                  return (
                    <div key={seasons._id} className='section season--cell'>
                      <p>Starting SR: {seasons.StartingSR}</p>
                      <p>Heros Focused: {seasons.HerosFocused.toString()}</p>
                      <Link to='/season'><button className='btn' onClick={() => this.props.activeAccountActions.selectSeason(seasons._id)}>Open season</button></Link>
                    </div>
                  )
                })
                :
                <div className='active-account active-account--no u-margin-top-small u-margin-bottom-small'>
                  <p>We Dont Have Any Seasons Saved for This Account. Please Add One to Start Tracking</p>
                </div>
              }
              <div className='nav-link nav-link--go-back'>

              <Link to='/'>GO BACK</Link>
              </div>
            </div>
          </div>
          :
          <div className='active-account--no'>NO :(</div>
        }
      </div>
    );
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
    addSeasonFormActions: bindActionCreators(addSeasonFormActionCreators, dispatch),
  }
}
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Account));
