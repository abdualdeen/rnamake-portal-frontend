import React from "react";
import styled from "styled-components";
import { ChivoBoldCharade24px } from "../../styledMixins";
import "./DocsOverlay.css";

function DocsOverlay(props) {
  const { documentation } = props;

  return (
    <div className="container-center-horizontal">
      <div className="docs-overlay screen">
        <OverlapGroup>
          <Documentation>{documentation}</Documentation>
          <Vector3 src="/img/vector-3-2@2x.svg" />
        </OverlapGroup>
      </div>
    </div>
  );
}

const OverlapGroup = styled.div`
  width: 239px;
  height: 88px;
  position: relative;
`;

const Documentation = styled.div`
  ${ChivoBoldCharade24px}
  position: absolute;
  width: 238px;
  top: 0;
  left: 0;
  text-align: center;
  letter-spacing: 0;
`;

const Vector3 = styled.img`
  position: absolute;
  width: 239px;
  height: 4px;
  top: 54px;
  left: 0;
`;

export default DocsOverlay;
