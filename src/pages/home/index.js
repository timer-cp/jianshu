import React, { Component } from 'react';
import { HomeWrapper, HomeLeft, HomeRight, LoadMore, BackToTop } from './style';
import { connect } from 'react-redux';
import List from './components/List';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import Writer from './components/Writer';
import { actionCreaters } from './store';

class Home extends Component{

    handleScrollTop(){
        window.scroll(0, 0);
    }

    render(){
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img alt='img' className='banner-img' src='https://upload.jianshu.io/admin_banners/web_images/4435/c1d3ca63353c8bd527f0d781605516cb5b266d02.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'/>
                    <Topic/>
                    <List/>
                    <LoadMore onClick={() => {this.props.getHomeMore(this.props.articlePage)}}>
                        加载更多
                    </LoadMore>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
                {this.props.showScroll?<BackToTop onClick={this.handleScrollTop}>顶部</BackToTop>:null}
            </HomeWrapper>
        );
    }

    componentDidMount(){
        const indexAction = actionCreaters.getIndexList();
        this.props.changeHomeData(indexAction);
        this.bindEvents();
    }

    componentWillUnmount(){
        window.removeEventListener("scroll", this.props.changeScrollTopShow);
    }

    bindEvents(){
        window.addEventListener("scroll", this.props.changeScrollTopShow);
    }

}

const mapState = (state) => {
    return {
        articlePage: state.get('home').get('articlePage'),
        showScroll: state.get('home').get('showScroll')
    };
};

const mapDispatch = (dispatch) => {
    return {
        changeHomeData(action) {
            dispatch(action);
        },
        getHomeMore(articlePage){
            dispatch(actionCreaters.getMoreList(articlePage));
        },
        changeScrollTopShow(){
            if (document.documentElement.scrollTop > 300){
                dispatch(actionCreaters.toggleTopshow(true));
            } else {
                dispatch(actionCreaters.toggleTopshow(false));
            }
        }
    };
};

export default connect(mapState, mapDispatch)(Home);