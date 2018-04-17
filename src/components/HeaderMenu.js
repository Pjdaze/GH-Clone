import React from "react";
import styled from "styled-components";
const HeaderMenuWrapper = styled.div`
  display: flex;
  flex: 1 1 auto;
  justify-content: space-between;
  z-index: 1;

  color: rgba(255, 255, 255, 0.75);

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-left: 8px;
    li a {
      color: rgba(255, 255, 255, 0.75);
      font-size: 14px;
      font-weight: 600;
      padding-left: 8px;
      padding-right: 8px;
    }
  }
  .fa-bell,
  .fa-user {
    width: 16px;
    height: 17px;
  }
  .arrow-down {
    font-size: 4px;
  }
`;
const HeaderSearch = styled.div`
  .form-control {
    border-right: 1px solid #eaecef;

    width: 99.999%;
    min-height: 26px;
    padding-top: 0;
    padding-bottom: 0;
    background: none;

    box-shadow: none;
    font-size: 14px;
    font-weight: 600;

    color: #fff;
    padding-left: 8px;
    font-size: 12px;
    color: #586069;
    white-space: nowrap;
    vertical-align: middle;
    border: 0;
    outline: 0px;
    -webkit-appearance: none;
  }

  width: 300px;
  border-radius: 3px;
  min-height: 30px;
  font-size: inherit;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.125);
`;

const Input = styled.input`
  width: 99.999999%;
  background: transparent;
  border: none;
  font-size: 12px;
  padding-left: 10px;
  font-weight: bold;
  color: #8c8f92;
  outline: none;
`;

export default class HeaderMenu extends React.Component {
  render() {
    let user = "Pjdaze";
    return (
      <HeaderMenuWrapper>
        <HeaderSearch>
          <form onSubmit={e => this.handleSubmit(e)}>
            <Input ref="username" type="text" placeholder="Search GitHub" />
          </form>
        </HeaderSearch>
      </HeaderMenuWrapper>
    );
  }
}
