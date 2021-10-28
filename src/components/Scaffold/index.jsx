import React from "react";
import styled from "styled-components";


function Scaffold(props) {
  const { className } = props;

  return (
    <Scaffold1 className={`scaffold ${className || ""}`}>
      <ScaffoldIcon className="scaffold-icon-1" src="/img/scaffold-icon@2x.svg" />
    </Scaffold1>
  );
}

const Scaffold1 = styled.div`
  height: 63px;
  margin-left: 2px;
  display: flex;
  padding: 11px 10px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 63px;
  background-color: var(--wild-sand);

  &.scaffold.scaffold-2 {
    padding: 11px;
  }

  &.scaffold.scaffold-3 {
    padding: 11px;
  }
`;

const ScaffoldIcon = styled.img`
  width: 40px;
  height: 40px;
`;

export default Scaffold;
