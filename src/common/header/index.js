import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreaters } from './store';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    NavSearch,
    Addition,
    Button
} from "./style";

class Header extends Component{
    getListArea(){
        const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
        const jsList = list.toJS();
        const pageList = [];
        if (jsList.length){
            for (let i = (page-1)*10; i<page*10; i++){
                if (jsList[i]) {
                    pageList.push(<SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>);
                }
            }
        }
        if (focused||mouseIn){
            return (
                <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={ () => handleChangePage(page, totalPage, this.spinIcon)}>
                            <i ref={(icon) => {this.spinIcon = icon;}} className="iconfont spin">&#xe746;</i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            );
        } else {
            return null;
        }
    }

    render(){
        const { focused, list, handleInputBlur, handleInputFocused } = this.props;
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'>
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames='slide'>
                            <NavSearch
                                onBlur={handleInputBlur}
                                onFocus={() => handleInputFocused(list)}
                                className={focused?'focused':''} />
                        </CSSTransition>
                        <i className={focused?'focused iconfont zoom':'iconfont zoom'}>&#xe623;</i>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className='writting'>
                        <i className="iconfont">&#xe601;</i>
                        写文章
                    </Button>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        );
    };

}

const mapStateToProps = (state) => {
    return {
        focused: state.get("header").get("focused"),
        list: state.get("header").get("list"),
        page: state.get("header").get("page"),
        mouseIn: state.get("header").get("mouseIn"),
        totalPage: state.get("header").get("totalPage")
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputBlur(){
            dispatch(actionCreaters.searchBlur());
        },
        handleInputFocused(list){
            (list.size === 0) && dispatch(actionCreaters.getSearchList());
            dispatch(actionCreaters.searchFocus());
        },
        handleMouseEnter(){
            dispatch(actionCreaters.mouseEnter());
        },
        handleMouseLeave(){
            dispatch(actionCreaters.mouseLeave());
        },
        handleChangePage(page, totalPage, spin){
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if (originAngle) {
                originAngle = parseInt(originAngle, 10);
            }else {
                originAngle = 0;
            }
            spin.style.transform = 'rotate('+(originAngle+360)+'deg)';

            if (page < totalPage){
                dispatch(actionCreaters.changePage(page + 1));
            } else {
                dispatch(actionCreaters.changePage(1));
            }
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);