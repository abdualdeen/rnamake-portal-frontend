import React from "react";
import styled from "styled-components";
import { ChivoLightCharade12px } from "../../styledMixins";
import "./ProcessingSubmission.css";

function ProcessingSubmission(props) {
  const { children } = props;

  return (
    <div className="container-center-horizontal">
      <div className="processing-submission screen">
        <Text1>{children}</Text1>
      </div>
    </div>
  );
}

const Text1 = styled.div`
  ${ChivoLightCharade12px}
  min-height: 14px;
  margin-left: 1px;
  margin-top: 2px;
  letter-spacing: 0;
`;

export default ProcessingSubmission;
