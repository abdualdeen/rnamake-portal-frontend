import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./DesignNewScaffold.css";

function DesignNewScaffold(props) {
  const { text2 } = props;

  return (
    <div className="container-center-horizontal">
      <div
        className="design-new-scaffold screen"
        onclick="window.open('desktop-design-new-scaffold-pg-1.html', '_self');"
      >
        <OverlapGroup1>
          <ScaffoldIcon src="/img/scaffold-icon@2x.svg" />
          <Text2>{text2}</Text2>
          <OverlapGroup>
            <Rectangle20></Rectangle20>
            <Rectangle21></Rectangle21>
          </OverlapGroup>
        </OverlapGroup1>
      </div>
    </div>
  );
}

const OverlapGroup1 = styled.div`
  height: 83px;
  display: flex;
  padding: 0 19px;
  align-items: center;
  min-width: 633px;
  background-color: var(--kashmir-blue);
`;

const ScaffoldIcon = styled.img`
  width: 45px;
  height: 45px;
`;

const Text2 = styled.div`
  min-height: 29px;
  margin-left: 20px;
  min-width: 285px;
  font-family: var(--font-family-chivo);
  font-weight: 400;
  color: var(--wild-sand);
  font-size: var(--font-size-l);
  letter-spacing: 0;
`;

const OverlapGroup = styled.div`
  width: 36px;
  height: 36px;
  position: relative;
  margin-left: 196px;
  margin-top: 1px;
`;

const Rectangle20 = styled.div`
  position: absolute;
  width: 8px;
  height: 36px;
  top: 0;
  left: 14px;
  background-color: var(--wild-sand);
`;

const Rectangle21 = styled.div`
  position: absolute;
  width: 8px;
  height: 36px;
  top: 0;
  left: 14px;
  background-color: var(--wild-sand);
  transform: rotate(-90deg);
`;

export default DesignNewScaffold;
