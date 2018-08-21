import React, { Component } from 'react';

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
          this.props.formActions.gameFormActions.setMatchMap(this.state.matchMap);
          this.props.formActions.gameFormActions.nextStepGameForm();
      }

    render() {
        return (
            <div className='account-form'>
                {/* <h1 className='u-margin-bottom-small'>Hello {this.props.profile.nickname}</h1> */}
                <form className="account-form__form">
                {this.state.Errors ? <div><p>{this.state.Errors}</p></div> : <div><p>no errors to show</p></div> } 
                    <input
                        className='account-form__form--starting-sr'
                        value={this.state.atchMap}
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


export default MatchMap;