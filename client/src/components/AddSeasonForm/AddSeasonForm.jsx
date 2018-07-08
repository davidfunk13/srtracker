import React, { Component } from 'react';
import StartingSR from './StartingSR/StartingSR';
import HerosFocused from './HerosFocused/HerosFocused';
import ConfirmSeason from './ConfirmSeason/ConfirmSeason';

class AddSeasonForm extends Component {
    
    componentDidMount(){
        console.log(this.props.addSeasonForm.seasonFormStep)
    }

    render() {
        let step = this.props.addSeasonForm.seasonFormStep
        switch (step) {
            case 1:
                step = <StartingSR {...this.props} />
                break;
            case 2:
                step = <HerosFocused {...this.props}/>
                break;
            case 3:
                step = <ConfirmSeason {...this.props} />
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
export default AddSeasonForm