import React from 'react';
import styled from 'styled-components';
import HeaderMenu from './HeaderMenu';

const HeaderWrapper = styled.div`
z-index: 1;
    padding-top: 12px;
    padding-bottom: 12px;
min-height: 30px;
    font-size: inherit;
    color: #fff;
    background-color: rgba(255,255,255,0.125);
    border: 0;
    box-shadow: none;

background-color: #24292e;
color: rgba(255,255,255,0.75);

.header {
    .fa-github {
font-size: 32px;
color: #fff;
margin: -1px 15px -1px -2px;

}
display: flex;
justify-content: sapace-between;
margin-left: auto;
 margin-right: auto;
 max-width: 1012px;
 padding: 0 16px 0 16px;



}

`;

export default class Header extends React.Component {

    render() {
        return (
            <HeaderWrapper>
            <div className="header">
             
            <span className="fab fa-github"></span>
            <HeaderMenu />
            
          
            </div>
            </HeaderWrapper>
          
        )
    }
}