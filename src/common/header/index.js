import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    Addition,
    Button
} from "./style";

const Header = (props) => {
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
                        in={props.focused}
                        timeout={200}
                        classNames='slide'>
                        <NavSearch
                            onBlur={props.handleInputBlur}
                            onFocus={props.handleInputFocused}
                            className={props.focused?'focused':''} />
                    </CSSTransition>
                    <i className={props.focused?'focused iconfont':'iconfont'}>&#xe623;</i>
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

const mapStateToProps = (state) => {
    return {
        focused: state.focused
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputBlur(){
            const action = {
                type: "search_blur"
            };
            dispatch(action);
        },
        handleInputFocused(){
            const action = {
                type: "search_focus"
            };
            dispatch(action);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);