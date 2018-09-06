import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
        if (isNaN(this.state.StartingSR) || this.state.StartingSR < 500 || this.state.StartingSR > 4500 || this.state.StartingSR.charAt(0) === '0' || this.state.StartingSR.length < 3 || this.state.StartingSR.length > 4 || this.state.StartingSR.charAt(0 && 1) === '0') {
            if (isNaN(this.state.StartingSR)) {
                this.setState({ Errors: 'Must be a number!' });
            }
            if (this.state.StartingSR < 500) {
                this.setState({ Errors: 'Must be higher...' });
            }
            if (this.state.StartingSR > 4500) {
                this.setState({ Errors: "Can't be that high..." });
            }
            if (this.state.StartingSR.charAt(0) === '0') {
                this.setState({ Errors: "No trailing numbers. 987 not 0987" })
            }
            if (this.state.StartingSR.charAt(0 && 1) === '0') {
                this.setState({ Errors: "Must be above 500 and not have preceding zeros." })
            }
            if (this.state.StartingSR.length < 3) {
                this.setState({ Errors: "Must be at least 3 digits." })
            }
            if (this.state.StartingSR.length > 4) {
                this.setState({ Errors: "Must be 4 digits or less." })
            }


            return this.state.Errors
        }
        console.log(this.state.StartingSR.length)

        this.props.formActions.seasonFormActions.setStartingSR(this.state.StartingSR);
        this.props.formActions.seasonFormActions.nextStepSeasonForm();
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <p className='margin-bottom-small'>Starting SR for this Season</p>
                        <form className="text-center">
                            {this.state.Errors ? <div><p className='margin-bottom-small'>{this.state.Errors}</p></div> : <div></div>}
                            <input
                                className='text-center margin-bottom-small input-form'
                                value={this.state.StartingSR}
                                name="StartingSR"
                                onChange={this.handleInputChange}
                                type="number"
                                placeholder="StartingSR"
                            />
                            <Link className='btn btn-primary btn-block margin-bottom-small' to='/' role='button' onClick={this.handleStartingSR}>submit</Link>
                        </form>
                    </div>
                </div>

            </div>
        )
    }
}

export default StartingSR;