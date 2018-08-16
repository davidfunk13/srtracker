import actionTypes from '../actions/actionTypes';

const initialState = {
Battletag:"",
StartingSR: "",
HerosFocused: [],
Err: []
}

export default function currentSeasonReducer(state = initialState, action) {
    switch (action.type) {

        default:
            {
                return state;
            }
    }
}