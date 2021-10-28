import React from "react";
import styled from "styled-components";
import { ChivoLightCharade12px } from "../../styledMixins";
import "./ExecutionFailed.css";

function ExecutionFailed(props) {
  const { children } = props;

  return (
    <div className="container-center-horizontal">
      <div className="execution-failed screen">
        <Executing>{children}</Executing>
      </div>
    </div>
  );
}

const Executing = styled.div`
  ${ChivoLightCharade12px}
  min-height: 14px;
  margin-top: 2px;
  letter-spacing: 0;
`;

export default ExecutionFailed;
