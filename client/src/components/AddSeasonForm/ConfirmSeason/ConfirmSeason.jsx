import React, { Component } from 'react';

class ConfirmSeason extends Component {
    componentDidMount() {
        console.log(this.props)
    }
    handleSubmit = (SeasonData) => {
        console.log(SeasonData)
        this.props.formActions.seasonFormActions.saveSeason(SeasonData)
        this.props.formActions.seasonFormActions.resetSeasonForm()
        this.props.modalActions.closeModal()
    }
    render() {
        let SeasonData = {
            UserId: this.props.currentUser.userId,
            BattletagId: this.props.currentBattletag._id,
            Battletag: this.props.currentBattletag.Battletag,
            StartingSR: this.props.forms.seasonForm.StartingSR,
            CurrentSR: this.props.forms.seasonForm.StartingSR,
            HerosFocused: this.props.forms.seasonForm.HerosFocused,
        }
        return (
            <div className='account-form'>
                <h1 className='margin-bottom-small'> is this information correct?</h1>
                <div className='account-info text-center'>
                    <p className='margin-bottom-small'>Battletag: {SeasonData.Battletag}</p>
                    <p className='margin-bottom-small'>Starting SR: {SeasonData.StartingSR} </p>
                    <p className='margin-bottom-small'>Heros Focused this Season: {SeasonData.HerosFocused.toString()} </p>
                <button className='btn btn--save-info margin-bottom-small' onClick={() => this.handleSubmit(SeasonData)} >Save Info</button> 
                </div>
            </div>
        )
    }
}

export default ConfirmSeason