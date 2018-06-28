import React, {Component} from 'react';
import Auth from '../Auth/Auth';

export default class Callback extends Component {
    componentDidMount() {
        const auth = new Auth();
        auth.handleAuthentication();
    }

    render() {
        return(
            <p className="loading">Loading.....</p>
        )
    }
}