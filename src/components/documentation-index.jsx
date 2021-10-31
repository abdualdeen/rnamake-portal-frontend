import React from "react";
//import { Link } from "react-router-dom";
import styled from "styled-components";
import { ChivoBoldCharade24px } from "../../styledMixins";
import "./AboutOverlay.css";

function DocumentationOverlay() {
  return (
    <div className="container-center-horizontal">
      <div className="about-overlay screen" onClick="window.open('desktop-about.html', '_self');">
        <OverlapGroup>
          <Documentation>{Documentation}</Documentation>
          <Vector3 src="/img/vector-3@2x.svg" />
        </OverlapGroup>
      </div>
    </div>
  );
}

const OverlapGroup = styled.div`
  width: 115px;
  height: 88px;
  position: relative;
`;

const Documentation = styled.div`
  ${ChivoBoldCharade24px}
  position: absolute;
  width: 115px;
  top: 0;
  left: 0;
  text-align: center;
  letter-spacing: 0;
`;

const Vector3 = styled.img`
  position: absolute;
  width: 115px;
  height: 4px;
  top: 54px;
  left: 0;
`;

export default DocumentationOverlay;
