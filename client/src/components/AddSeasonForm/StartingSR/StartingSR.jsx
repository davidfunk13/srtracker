import React, { Component } from 'react';


class StartingSR extends Component {
    state = {
        StartingSR: "",
        Errors: "",
    };
    handleInputChange = event => {
        let value = event.target.value;
        let name = event.target.name;
        this.setState({
            [name]: value
        });
        console.log(this.state.StartingSR.length)
        console.log(`BattleTag input: ${this.state.StartingSR}`)
    };

    handleStartingSR = event => {
        event.preventDefault();
        if (isNaN(this.state.StartingSR) || this.state.StartingSR < 500 || this.state.StartingSR > 4500 || this.state.StartingSR.charAt(0)==='0'|| this.state.StartingSR.length < 3||this.state.StartingSR.length > 4 || this.state.StartingSR.charAt(0 && 1)==='0') {
            if (isNaN(this.state.StartingSR)){
                this.setState({ Errors: 'Starting SR must be a number!'});
            }
            if (this.state.StartingSR < 500 ){
                this.setState({ Errors: 'Starting SR must be higher...'});
            }
            if (this.state.StartingSR > 4500 ){
                this.setState({ Errors: "Starting SR can't be that high..."});
            }
            if (this.state.StartingSR.charAt(0)==='0'){
                this.setState({ Errors: "If your SR is under 1000, enter it like so: 987 not 0987"})
            }
            if (this.state.StartingSR.charAt(0 && 1)==='0'){
                this.setState({ Errors: "Starting SR must be above 500 and not have preceding zeros."})
            }
            if(this.state.StartingSR.length < 3){
                this.setState({ Errors: "Starting SR must be at least 3 digits."})
            }
            if(this.state.StartingSR.length > 4){
                this.setState({ Errors: "Starting SR must be 4 digits or less."})
            }

            
            return this.state.Errors
        }
        console.log(this.state.StartingSR.length)

        this.props.formActions.seasonFormActions.setStartingSR(this.state.StartingSR);
        this.props.formActions.seasonFormActions.nextStepSeasonForm();
    }

    render() {
        return (
            <div className='account-form'>
                {/* <h1 className='u-margin-bottom-small'>Hello {this.props.profile.nickname}</h1> */}
                <form className="account-form__form">
                    {this.state.Errors ? <div><p>{this.state.Errors}</p></div> : <div><p>no errors to show</p></div>}
                    <input
                        className='account-form__form--StartingSR'
                        value={this.state.StartingSR}
                        name="StartingSR"
                        onChange={this.handleInputChange}
                        type="number"
                        placeholder="StartingSR"
                    />
                    <button className='btn btn--submit-form' onClick={this.handleStartingSR}>Submit</button>
                </form>
            </div>
        )
    }
}

export default StartingSR;