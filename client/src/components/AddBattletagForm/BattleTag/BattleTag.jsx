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
            <div className='container'>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <h3 className='margin-bottom-small'>Enter a Battletag</h3>
                        <p className='margin-bottom-small'>No trailing numbers are required, this is simply to put at the top of your spreadsheet in case you want to track another account.</p>
                        <form>
                            {this.state.Errors ? <div><p className='form-errors'>{this.state.Errors}</p></div> : ""}
                            <input
                                className='input-form text-center margin-bottom-small'
                                value={this.state.Battletag}
                                name="Battletag"
                                onChange={this.handleInputChange}
                                type="text"
                                placeholder="Battletag"
                            />
                            <button className='btn btn-sm margin-bottom-small' onClick={this.handleFormSubmit}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default BattleTag;