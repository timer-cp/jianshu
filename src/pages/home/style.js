import styled from 'styled-components';

export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
`;

export const HomeLeft = styled.div`
    width: 625px;
    float: left;
    margin-left: 15px;
    padding-top: 30px;
    .banner-img {
        width: 625px;
        height: 240px;
    }
`;

export const HomeRight = styled.div`
    width: 240px;
    float: right;
`;

export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -18px;
`;

export const TopicItem = styled.div`
    height: 32px;
    line-height: 32px;
    padding-right: 10px;
    margin-left: 18px;
    margin-bottom: 18px;
    float: left;
    background: #f7f7f7;
    font-size: 14px;
    color: #000;
    border: solid 1px #dcdcdc;
    border-radius: 4px;
    .topic-pic {
        width: 32px;
        height: 32px;
        margin-right: 10px;
        display: block;
        float: left;
    }
`;