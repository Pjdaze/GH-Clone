import React from "react";
import styled from "styled-components";

const HomeWrapper = styled.div`
    max-width: 1012px;


  height: 100vh;
  margin: 20px auto;

  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 10px;
  aside {

       height: 100%;
    .avatar {
       
      margin: 0 auto;
      border-radius: 5px;
      width: 229px;
      height: 230px;
    }

    .bio {
        height: 481px;
      display: flex;
      flex-direction: column;
       padding-top: 20px;
       font-family: 'Helvetica';
       font-size: 14px;

       span {
           margin-bottom: 20px;
       }

      .btn {
           width: 100%;
        position: relative;
    display: inline-block;
    padding: 6px 12px;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-repeat: repeat-x;
    background-position: -1px -1px;
    background-size: 110% 110%;
    border: 1px solid rgba(27,31,35,0.2);
    border-radius: 0.25em;
    margin-bottom: 20px;
      }
    }
  }

  .home-nav {
    top: 0 !important;
    border-bottom: 1px solid #d1d5da;
    width: 90%;
    position: static;
    top: 0px;
    left: 307px;
    width: 727px;
    ul {
      left: 307px;
    width: 727px;
      display: flex;
      justify-content: space-between;
      li {
        padding: 16px 8px;
        margin-right: 16px;
        font-size: 14px;
        line-height: 1.5;
        color: #586069;
        text-align: center;
        border-bottom: 2px solid transparent;
        &.activex {
    border-bottom: 2px solid #e36209;
  }
      
      }
      .bubble-values {

            display: inline-block;
    padding: 2px 5px;
    font-size: 12px;
    font-weight: 600;
    line-height: 1;
    color: #586069;
    background-color: rgba(27,31,35,0.08);
    border-radius: 20px;
}
      }

    }
  }

`;

export default HomeWrapper;
