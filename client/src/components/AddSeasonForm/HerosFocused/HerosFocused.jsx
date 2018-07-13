import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as modalActionCreators from '../../../actions/modalActions';
import * as accountActionCreators from '../../../actions/accountActions';
import * as activeAccountActionCreators from '../../../actions/activeAccountActions';
import * as addSeasonFormActionCreators from '../../../actions/addSeasonFormActions';

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

      handleHerosFocused = (icon) => {
          this.props.addSeasonFormActions.setHerosFocused(icon)
          console.log(this.props.addSeasonForm.HerosFocused.length)
          if(this.props.addSeasonForm.HerosFocused.length === 2) {
              this.props.addSeasonFormActions.nextStepSeasonForm();
          }
      }


    render() {
        let heros = ['ana', 'bastion', 'brigitte', 'doomfist', 'genji', 'hammond', 'hanzo', 'junkrat', 'lucio', 'mcree', 'mei', 'mercy', 'moira', 'orisa', 'phara', 'reaper', 'rein', 'roadhog', 'soldier', 'sombra', 'symm', 'torb', 'tracer', 'widow', 'winston'];
        let icons = heros.map(icon => {
            return <img key={icon} onClick={() => this.handleHerosFocused(icon)} src={require(`./icons/${icon}.png`)} alt={icon + '_icon'}/>
        })
        return (
            <div className='heros-focused'>
                {icons}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        showModal: state.showModal,
        accounts: state.accounts,
        activeAccount: state.activeAccount,
        addSeasonForm: state.addSeasonForm,
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

export default connect(mapStateToProps, mapDispatchToProps)(HerosFocused)