import * as constants from './constants';
import axios from 'axios';

const homeList = (data) => {
    return {
        type: constants.HOME_LIST,
        data: {
            topicList: data.topicList,
            articleList: data.articleList,
            recommendList: data.recommendList
        }
    }
};

const moreList = (data, page) => {
    return {
        type: constants.MORE_LIST,
        data: data,
        nextPage: page + 1
    }
};

export const getIndexList = () => {
    return (dispatch) => {
        axios.get("/api/home.json").then((res) => {
            const data = res.data.data;
            const action = homeList(data);
            dispatch(action);
        }).catch(() => {
            console.log("Get Home List Error!")
        });
    }
};

export const getMoreList = (articlePage) => {
    return (dispatch) => {
        axios.get("/api/homemore.json?page="+articlePage).then((res) => {
            const data = res.data.data;
            dispatch(moreList(data, articlePage));
        }).catch(() => {
            console.log("Get Home More List Error!")
        });
    };
}