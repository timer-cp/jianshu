import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    focused: false,
    list: []
});

export default (state=defaultState, action) => {
    switch (action.type) {
        case constants.SEARCH_FOCUS:
            return state.set("focused", true);
        case constants.SEARCH_BLUR:
            return state.set('focused', false);
        case constants.SEARCH_KEYLIST:
            return state.set('list', action.value);
        default:
            return state;
    }
};