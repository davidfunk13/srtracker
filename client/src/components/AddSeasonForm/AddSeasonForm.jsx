import React, { Component } from 'react';
import StartingSR from './StartingSR/StartingSR';
import HerosFocused from './HerosFocused/HerosFocused';
import Confirm from './Confirm/Confirm';

class AddSeasonForm extends Component {
    
    componentDidMount(){
        console.log(this.props.addSeasonForm.step)
    }

    render() {
        let step = this.props.addSeasonForm.step
        switch (step) {
            case 1:
                step = <StartingSR {...this.props} />
                break;
            case 2:
                step = <HerosFocused {...this.props}/>
                break;
            case 3:
                step = <Confirm {...this.props} />
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