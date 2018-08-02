import React, { Component } from 'react';

class ConfirmGame extends Component {
    
    componentDidMount() {
        console.log(this.props)
    }
    handleSubmit = (GameData) => {
        console.log(GameData)
        this.props.activeAccountActions.saveGame(GameData)
        this.props.modalActions.closeModal()
    }
    render() {
        let GameData = {
            seasonOwnership: this.props.activeAccount.seasonIdForLookup,
            BattleTag: this.props.activeAccount.accountData.BattleTag,
            matchMap: this.props.addGameForm.matchMap,
            heroSelected: this.props.addGameForm.heroSelected,
            didYouWin: this.props.addGameForm.didYouWin,
            postMatchSR: this.props.addGameForm.postMatchSR,
        }
        return (
            <div className='account-form'>
                <h1 className='u-margin-bottom-small'> is this information correct?</h1>
                <div className='game-info'>
                    <p>Map: {GameData.matchMap}</p>
                    <p>Hero: {GameData.heroSelected}</p>
                    <p>Victory: {GameData.didYouWin}</p>
                    <p>SR After Match: {GameData.postMatchSR}</p>
                    <button className='btn btn--save-info' onClick={() => this.handleSubmit(GameData)} >Save Game</button>
                </div>
            </div>
        )
    }
}

export default ConfirmGame