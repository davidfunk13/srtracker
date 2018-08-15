import React, { Component } from 'react';
class BattleTag extends Component {
    state = {
        Battletag: "",
        Errors: "",
    };

    handleInputChange = event => {
        let value = event.target.value;
        let name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        let Battletag = this.state.Battletag;
        let battletagObj = {
            UserId: this.props.currentUser.userId,
            Battletag: Battletag
        }
        if (Battletag === "") {
            console.log('empty')
            this.setState({ Errors: 'Battletag Cannot be Empty Field!' })
            return this.state.Errors
        }
        if (Battletag !== "") {
            this.setState({ Errors: [] })
            console.log(battletagObj)
            this.props.battletagActions.createBattletag(battletagObj)
            this.props.modalActions.closeModal()
        }
    }


    render() {
        return (
            <div className='account-form'>
                <h1 className='u-margin-bottom-small'>Please tell us your Battletag!</h1>
                <h2>No trailing numbers are required, this is simply to put at the top of your spreadsheet in case you want to track another account.</h2>
                <form className="account-form__form">
                    {this.state.Errors ? <div><p className='form-errors'>{this.state.Errors}</p></div> : ""}
                    <input
                        className='account-form__form--BattleTag'
                        value={this.state.Battletag}
                        name="Battletag"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Battletag"
                    />
                    <button className='btn btn--submit-form' onClick={this.handleFormSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}

export default BattleTag;