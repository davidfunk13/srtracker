import React, { Component } from 'react';

class ConfirmGame extends Component {
    componentDidMount() {
        console.log(this.props)
    }
    handleSubmit = (
        // GameData
    ) => {
        // console.log(GameData)
        // this.props.activeAccountActions.saveGame(GameData)
        // this.props.modalActions.closeModal()
    }
    render() {
        // let GameData = {
        //     matchMap: 
        //     HeroSelected: 
        //     didYouWin: 
        //     postMatchSR: 
        // }
        return (
            <div className='account-form'>
                {/* <h1 className='u-margin-bottom-small'> is this information correct?</h1> */}
                <div className='game-info'>
                    {/* <h2>Battletag: {SeasonData.BattleTag}</h2>
                    <h2>Starting SR: {SeasonData.StartingSR} </h2>
                    <h2>Heros Focused this Season: {SeasonData.HerosFocused.toString()} </h2> */}
                    <button className='btn btn--save-info' onClick={() => this.handleSubmit(
                        // SeasonData
                        )} >Save Info</button>
                </div>
            </div>
        )
    }
}

export default ConfirmGame