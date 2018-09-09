import React, { Component } from 'react';
import { HomeWrapper, HomeLeft, HomeRight } from './style';
import { connect } from 'react-redux';
import List from './components/List';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import Writer from './components/Writer';
import { actionCreaters } from './store';

class Home extends Component{

    render(){
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img alt='img' className='banner-img' src='https://upload.jianshu.io/admin_banners/web_images/4435/c1d3ca63353c8bd527f0d781605516cb5b266d02.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'/>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
            </HomeWrapper>
        );
    }

    componentDidMount(){
        const indexAction = actionCreaters.getIndexList();
        this.props.changeHomeData(indexAction);
    }

}

const mapDispatch = (dispatch) => {
    return {
        changeHomeData(action) {
            dispatch(action);
        }
    };
};

export default connect(null, mapDispatch)(Home);