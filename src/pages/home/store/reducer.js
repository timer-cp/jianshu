import {fromJS} from 'immutable';

const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: "在路上",
        imgUrl: "https://upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
    }, {
        id: 2,
        title: "自然科普",
        imgUrl: "https://upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
    }]
});

export default (state = defaultState, action) => {
    switch (action.type) {

        default:
            return state;
    }
};