import React, { Component } from 'react';

class ConfirmGame extends Component {
    componentDidMount() {
        console.log(this.props)
    }
    handleSubmit = (gameData) => {
        console.log(gameData)
        this.props.formActions.gameFormActions.saveGame(gameData)
        this.props.modalActions.closeModal()
        this.props.formActions.gameFormActions.resetGameForm()
    }
    render() {
        let gameData = {
            UserId: this.props.currentUser.userId,
            BattletagId: this.props.currentSeason.BattletagId,
            Battletag: this.props.currentSeason.Battletag,
            SeasonId:  this.props.currentSeason._id,
            matchMap: this.props.forms.gameForm.matchMap,
            heroSelected: this.props.forms.gameForm.heroSelected,
            winLoss: this.props.forms.gameForm.didYouWin,
            postMatchSR: this.props.forms.gameForm.postMatchSR,
        }
        console.log(gameData)
        return (
            <div className='account-form'>
                <h1 className='u-margin-bottom-small'> is this information correct?</h1>
                <div className='game-info'>
                    <p>Map: {gameData.matchMap}</p>
                    <p>Hero: {gameData.heroSelected}</p>
                    <p>Victory: {gameData.didYouWin}</p>
                    <p>SR After Match: {gameData.postMatchSR}</p>
                    <button className='btn btn--save-info' onClick={() => this.handleSubmit(gameData)} >Save Game</button>
                </div>
            </div>
        )
    }
}

export default ConfirmGame