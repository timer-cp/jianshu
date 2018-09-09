import React, { Component } from 'react';
import { ListItem, ListInfo } from '../style';
import { connect } from 'react-redux';

class List extends Component{
    render(){
        const { list } = this.props;
        return (
            <div>
                {
                    list.map((item) => {
                        return (
                            <ListItem key={item.get('id')}>
                                <img alt=''
                                     src={item.get('imgUrl')}
                                     className='list-pic'/>
                                <ListInfo>
                                    <h3 className='title'>{item.get('title')}</h3>
                                    <p className='desc'>{item.get('desc')}</p>
                                </ListInfo>
                            </ListItem>
                        );
                    })
                }
            </div>
        );
    }
}

const mapState = (state) => {
    return {
        list: state.getIn(['home', 'articleList'])
    };
};

export default connect(mapState, null)(List);