import React, { Component } from 'react';
import MatchMap from './MatchMap/MatchMap';
import HeroSelected from './HeroSelected/HeroSelected';
import DidYouWin from './DidYouWin/DidYouWin';
import PostMatchSR from './PostMatchSR/PostMatchSR';
import ConfirmGame from './ConfirmGame/ConfirmGame';

class AddGameForm extends Component {

    render() {        
        let step = this.props.forms.gameForm.step;
        switch (step) {
            case 1:
                step = <MatchMap {...this.props} />
                break;
            case 2:
                step = <HeroSelected {...this.props}/>
                break;
            case 3:
                step = <DidYouWin {...this.props} />
                break;
            case 4:
                step = <PostMatchSR {...this.props} />
                break;
            case 5:
                step = <ConfirmGame {...this.props} />
                break;
            default:
                break;
        }
        return step
    }
}
export default AddGameForm