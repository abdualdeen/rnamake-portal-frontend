import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ChivoBoldCharade24px } from "../../styledMixins";
import "./PortalOverlay.css";

function PortalOverlay(props) {
  const { place } = props;

  return (
    <div className="container-center-horizontal">
      <div className="portal-overlay screen" onclick="window.open('desktop-portal-home.html', '_self');">
        <OverlapGroup>
          <Place>{place}</Place>
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

const Place = styled.div`
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

export default PortalOverlay;
