import React, { Component } from 'react';
import { RecommendWrapper, RecommendItem } from '../style';
import { connect } from 'react-redux';

class Recommend extends Component{
    render(){
        const { list } = this.props;
        return (
            <RecommendWrapper>
                {
                    list.map((item) => {
                        return <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')}/>;
                    })
                }
            </RecommendWrapper>
        );
    }
}

const mapStatus = (state) => {
    return {
        list: state.get("home").get("recommendList")
    };
};

export default connect(mapStatus, null)(Recommend);