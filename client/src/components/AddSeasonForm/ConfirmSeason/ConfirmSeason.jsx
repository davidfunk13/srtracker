import React, { Component } from 'react';

class ConfirmSeason extends Component {
    componentDidMount() {
        console.log(this.props)
    }
    handleSubmit = (SeasonData) => {
        console.log(SeasonData)
        this.props.activeAccountActions.saveSeason(SeasonData)
        this.props.addSeasonFormActions.resetSeasonForm()
        this.props.modalActions.closeModal()
    }
    render() {
        let SeasonData = {
            uid: this.props.profile.sub,
            accountOwnership: this.props.activeAccount.accountData._id,
            BattletagOwnership: this.props.activeAccount.accountData.Battletag,
            StartingSR: this.props.addSeasonForm.StartingSR,
            HerosFocused: this.props.addSeasonForm.HerosFocused,
        }
        return (
            <div className='account-form'>
                <h1 className='u-margin-bottom-small'> is this information correct?</h1>
                <div className='account-info'>
                    <h2>Battletag: {SeasonData.BattletagOwnership}</h2>
                    <h2>Starting SR: {SeasonData.StartingSR} </h2>
                    <h2>Heros Focused this Season: {SeasonData.HerosFocused.toString()} </h2>
                    <button className='btn btn--save-info' onClick={() => this.handleSubmit(SeasonData)} >Save Info</button>
                </div>
            </div>
        )
    }
}

export default ConfirmSeason