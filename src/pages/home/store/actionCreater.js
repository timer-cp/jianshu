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
}