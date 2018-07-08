import React, { Component } from 'react';


class DidYouWin extends Component {
    state = {
        didYouWin: '',
        Errors: "",
      };
      handleInputChange = event => {
          let value = event.target.value;
          let name = event.target.name;
          this.setState({
              [name]: value
          });
          console.log(`BattleTag input: ${this.state.didYouWin}`)
      };

      handleDidYouWin = event => {
          event.preventDefault();
          this.props.addGameFormActions.setDidYouWin(this.state.didYouWin)
          this.props.addGameFormActions.nextStepGameForm();

      }


    render() {
        return (
            <div className='account-form'>
                <form className="account-form__form">
                {this.state.Errors ? <div><p>{this.state.Errors}</p></div> : <div><p>no errors to show</p></div> } 
                    <input
                        className='account-form__form--starting-sr'
                        value={this.state.didYouWin}
                        name="didYouWin"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="didYouWin"
                    />
                    <button className='btn btn--submit-form' onClick={this.handleDidYouWin}>Submit</button>
                </form>
            </div>
        )
    }
}


export default DidYouWin