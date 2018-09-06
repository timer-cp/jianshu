import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

const searchList = (data) => {
    return {
        type: constants.SEARCH_KEYLIST,
        value: fromJS(data),
        totalPage: Math.ceil(data.length/10)
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

export const mouseEnter = () => {
    return {
        type: constants.MOUSE_ENTER
    }
};

export const mouseLeave = () => {
    return {
        type: constants.MOUSE_EXIT
    }
};

export const changePage = (page) => {
    return {
        type: constants.CHANGE_PAGE,
        page
    }
};