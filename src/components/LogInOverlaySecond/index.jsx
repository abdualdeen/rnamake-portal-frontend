import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ChivoBoldWildSand18px } from "../../styledMixins";
import "./LogInOverlaySecond.css";

function LogInOverlaySecond(props) {
  const { children } = props;

  return (
    <div className="container-center-horizontal">
      <div className="log-in-overlay-second screen" onclick="window.open('desktop-portal-home.html', '_self');">
        <OverlapGroup>
          <LogIn>{children}</LogIn>
        </OverlapGroup>
      </div>
    </div>
  );
}

const OverlapGroup = styled.div`
  height: 59px;
  display: flex;
  padding: 0 85px;
  align-items: center;
  min-width: 225px;
  background-color: var(--kashmir-blue);
`;

const LogIn = styled.div`
  ${ChivoBoldWildSand18px}
  min-height: 21px;
  min-width: 54px;
  letter-spacing: 0;
`;

export default LogInOverlaySecond;
