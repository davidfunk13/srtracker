import React, { Component } from 'react';
import MatchMap from './MatchMap/MatchMap';
import HeroSelected from './HeroSelected/HeroSelected';
import DidYouWin from './DidYouWin/DidYouWin';
import PostMatchSR from './PostMatchSR/PostMatchSR';
import ConfirmGame from './ConfirmGame/ConfirmGame';

class AddGameForm extends Component {

    componentDidMount(){
        console.log(this.props.addGameForm.gameFormStep)
    }

    render() {
        let step = this.props.addGameForm.gameFormStep
        switch (step) {
            case 1:
                step = <MatchMap {...this.props} />
                break;
            case 2:
                step = <HeroSelected {...this.props}/>
                break;
            case 3:
                step = <DidYouWin {...this.props} />
            case 4:
                step = <PostMatchSR {...this.props} />
            case 5:
                step = <ConfirmGame {...this.props} />
                break;
            default:
                break;
        }
        return (
            <div>
                {step}
            </div>
        )
    }
}
export default AddGameForm