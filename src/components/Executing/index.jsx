import React from "react";
import styled from "styled-components";
import { ChivoLightCharade12px } from "../../styledMixins";
import "./Executing.css";

function Executing(props) {
  const { children } = props;

  return (
    <div className="container-center-horizontal">
      <div className="executing screen">
        <Executing1>{children}</Executing1>
      </div>
    </div>
  );
}

const Executing1 = styled.div`
  ${ChivoLightCharade12px}
  min-height: 14px;
  margin-top: 2px;
  letter-spacing: 0;
`;

export default Executing;
