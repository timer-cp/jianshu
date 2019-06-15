import React, { Component } from 'react';
import { ListItem, ListInfo } from '../style';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class List extends Component{
    render(){
        const { list } = this.props;
        return (
            <div>
                {
                    list.map((item, index) => {
                        return (
                            <Link key={index} to={'/detail/'+item.get('id')}>
                                <ListItem key={index}>
                                    <img alt=''
                                         src={item.get('imgUrl')}
                                         className='list-pic'/>
                                    <ListInfo>
                                        <h3 className='title'>{item.get('title')}</h3>
                                        <p className='desc'>{item.get('desc')}</p>
                                    </ListInfo>
                                </ListItem>
                            </Link>
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