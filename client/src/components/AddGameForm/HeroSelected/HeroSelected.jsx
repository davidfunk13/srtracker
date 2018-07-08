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
        //   this.props.addGameFormActions.setHeroSelected(this.state.heroSelected)
          this.props.addGameFormActions.nextStepGameForm();
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
                        placeholder="heroSelected"
                    />
                    <button className='btn btn--submit-form' onClick={this.handleHeroSelected}>Submit</button>
                </form>
            </div>
        )
    }
}

export default HeroSelected