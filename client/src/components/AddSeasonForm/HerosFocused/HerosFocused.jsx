import React, { Component } from 'react';

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
          this.props.formActions.seasonFormActions.setHerosFocused(icon)
          console.log(this.props.forms.seasonForm.HerosFocused.length)
          if(this.props.forms.seasonForm.HerosFocused.length === 2) {
              this.props.formActions.seasonFormActions.nextStepSeasonForm();
          }
      }


    render() {
        let heros = ['ana', 'bastion', 'brigitte', 'doomfist', 'genji', 'hammond', 'hanzo', 'junkrat', 'lucio', 'mcree', 'mei', 'mercy', 'moira', 'orisa', 'phara', 'reaper', 'rein', 'roadhog', 'soldier', 'sombra', 'symm', 'torb', 'tracer', 'widow', 'winston'];
        let icons = heros.map(icon => {
            return <img className='hero-img' key={icon} onClick={() => this.handleHerosFocused(icon)} src={require(`./icons/${icon}.png`)} alt={icon + '_icon'}/>
        })
        return (
            <div className='heros-focused'>
                {icons}
            </div>
        )
    }
}


export default HerosFocused;