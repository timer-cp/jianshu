import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    articlePage: 1,
    showScroll: false
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.HOME_LIST:
            return state.merge({
                topicList: fromJS(action.data.topicList),
                articleList: fromJS(action.data.articleList),
                recommendList: fromJS(action.data.recommendList)
            });
        case constants.MORE_LIST:
            // return state.set("articleList", state.get("articleList").concat(fromJS(action.data)));
            return state.merge({
                articleList: state.get("articleList").concat(fromJS(action.data)),
                articlePage: action.nextPage
            });
        case constants.TOP_SHOW:
            return state.set("showScroll", action.showScroll);
        default:
            return state;
    }
};