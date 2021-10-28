import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ChivoBoldWildSand18px } from "../../styledMixins";
import "./RegisterOverlayFirst.css";

function RegisterOverlayFirst(props) {
  const { children } = props;

  return (
    <div className="container-center-horizontal">
      <div className="register-overlay-first screen" onclick="window.open('desktop-register.html', '_self');">
        <OverlapGroup>
          <Place>{children}</Place>
        </OverlapGroup>
      </div>
    </div>
  );
}

const OverlapGroup = styled.div`
  height: 59px;
  display: flex;
  padding: 0 75px;
  align-items: center;
  min-width: 225px;
  background-color: var(--kashmir-blue);
`;

const Place = styled.div`
  ${ChivoBoldWildSand18px}
  min-height: 21px;
  min-width: 74px;
  letter-spacing: 0;
`;

export default RegisterOverlayFirst;
