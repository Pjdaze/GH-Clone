import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  border-top: 1px solid #c6cbd1;
  height: 100px;
  width: 100%;
  position: fixed;
  bottom: 0px;
  display: flex;
  justify-content: center;
  .fa-github {
    color: #c6cbd1;
  }
`;

export default () => (
  <FooterWrapper>
    <div className="footer-left">
      <ul />
    </div>
    <div className="footer-left">
      <span className="fab fa-github" />
    </div>
    <div className="footer-left" />
  </FooterWrapper>
);
