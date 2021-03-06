import React, { Component } from 'react';


class HeroSelected extends Component {
    state = {
        heroSelected: "",
        Errors: "",
      };

      handleInputChange = event => {
          let value = event.target.value;
          let name = event.target.name;
          this.setState({
              [name]: value
          });
          console.log(`BattleTag input: ${this.state.heroSelected}`)
      };

      handleHeroSelected = event => {
          event.preventDefault();
          this.props.formActions.gameFormActions.setHeroSelected(this.state.heroSelected)
          this.props.formActions.gameFormActions.nextStepGameForm();
      }


    render() {
        return (
            <div className='account-form'>
                <form className="account-form__form">
                {this.state.Errors ? <div><p>{this.state.Errors}</p></div> : <div><p>no errors to show</p></div> } 
                    <input
                        className='account-form__form--starting-sr'
                        value={this.state.heroSelected}
                        name="heroSelected"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Hero Selected"
                    />
                    <button className='btn btn--submit-form' onClick={this.handleHeroSelected}>Submit</button>
                </form>
            </div>
        )
    }
}

export default HeroSelected