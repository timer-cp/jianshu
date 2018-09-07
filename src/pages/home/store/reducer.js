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
    }],
    articleList: [{
        id: 1,
        title: '这10个软件，能让你的学习和工作效率甩其他人10条街！',
        desc: '大家好，我是小丸子，之前有给大家推荐一些提高生活质量和效率的软件，今天这一期来给大家分享一些提高学习效率的APP，相信我，看完你肯定会有收获！ ...',
        imgUrl: 'https://upload-images.jianshu.io/upload_images/5479122-c271931552856ca0.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    }, {
        id: 2,
        title: '这10个软件，能让你的学习和工作效率甩其他人10条街！',
        desc: '大家好，我是小丸子，之前有给大家推荐一些提高生活质量和效率的软件，今天这一期来给大家分享一些提高学习效率的APP，相信我，看完你肯定会有收获！ ...',
        imgUrl: 'https://upload-images.jianshu.io/upload_images/5479122-c271931552856ca0.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    }, {
        id: 3,
        title: '这10个软件，能让你的学习和工作效率甩其他人10条街！',
        desc: '大家好，我是小丸子，之前有给大家推荐一些提高生活质量和效率的软件，今天这一期来给大家分享一些提高学习效率的APP，相信我，看完你肯定会有收获！ ...',
        imgUrl: 'https://upload-images.jianshu.io/upload_images/5479122-c271931552856ca0.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    }, {
        id: 4,
        title: '这10个软件，能让你的学习和工作效率甩其他人10条街！',
        desc: '大家好，我是小丸子，之前有给大家推荐一些提高生活质量和效率的软件，今天这一期来给大家分享一些提高学习效率的APP，相信我，看完你肯定会有收获！ ...',
        imgUrl: 'https://upload-images.jianshu.io/upload_images/5479122-c271931552856ca0.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    }, {
        id: 5,
        title: '这10个软件，能让你的学习和工作效率甩其他人10条街！',
        desc: '大家好，我是小丸子，之前有给大家推荐一些提高生活质量和效率的软件，今天这一期来给大家分享一些提高学习效率的APP，相信我，看完你肯定会有收获！ ...',
        imgUrl: 'https://upload-images.jianshu.io/upload_images/5479122-c271931552856ca0.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    }]
});

export default (state = defaultState, action) => {
    switch (action.type) {

        default:
            return state;
    }
};