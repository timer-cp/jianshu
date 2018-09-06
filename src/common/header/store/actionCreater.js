import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

const searchList = (data) => {
    return {
        type: constants.SEARCH_KEYLIST,
        value: fromJS(data)
    }
};

export const searchFocus = () => {
    return {
        type: constants.SEARCH_FOCUS
    }
};

export const searchBlur = () => {
    return {
        type: constants.SEARCH_BLUR
    }
};

export const getSearchList = () => {
    return (dispatch) => {
        axios.get("/api/keylist.json").then((res) => {
            const data = res.data;
            const action = searchList(data);
            dispatch(action);
        }).catch(() => {

        });
    };
};