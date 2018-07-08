import React, { Component } from 'react';


class PostMatchSR extends Component {
    state = {
        postMatchSR: "",
        Errors: "",
      };
      handleInputChange = event => {
          let value = event.target.value;
          let name = event.target.name;
          this.setState({
              [name]: value
          });
          console.log(`BattleTag input: ${this.state.postMatchSR}`)
      };

      handlePostMatchSR = event => {
          event.preventDefault();
        //   console.log(this.props.addSeasonFormActions)
        //   this.props.addSeasonFormActions.setPostMatchSR(this.state.postMatchSR)
          this.props.addGameFormActions.nextStepGameForm();

      }
componentDidMount(){
    console.log(this.props)
}

    render() {
        return (
            <div className='account-form'>
                {/* <h1 className='u-margin-bottom-small'>Hello {this.props.profile.nickname}</h1> */}
                <form className="account-form__form">
                {this.state.Errors ? <div><p>{this.state.Errors}</p></div> : <div><p>no errors to show</p></div> } 
                    <input
                        className='account-form__form--starting-sr'
                        value={this.state.postMatchSR}
                        name="postMatchSR"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Post Match SR"
                    />
                    <button className='btn btn--submit-form' onClick={this.handlePostMatchSR}>Submit</button>
                </form>
            </div>
        )
    }
}
export default PostMatchSR