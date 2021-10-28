import React from "react";
import Scaffold from "../Scaffold";
import styled from "styled-components";
import { ChivoNormalCharade18px, ChivoLightCharade12px } from "../../styledMixins";


function Experiment1(props) {
  const { text1, address, className } = props;

  return (
    <Experiment11 className={`experiment-1 ${className || ""}`}>
      <Processing className="processing">
        <ProcessingSubmission1 className="processing-submission-1" src="/img/processing-submission-1@2x.svg" />
      </Processing>
      <OverlapGroup className="overlap-group-28">
        <Text30 className="text-30">{text1}</Text30>
        <Address className="address-2">{address}</Address>
      </OverlapGroup>
      <Scaffold />
    </Experiment11>
  );
}

const Experiment11 = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  min-width: 445px;

  &.experiment-1.experiment-2 {
    margin-top: 4px;
  }
`;

const Processing = styled.div`
  height: 63px;
  display: flex;
  padding: 16px 17px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 63px;
  background-color: var(--wild-sand);
`;

const ProcessingSubmission1 = styled.img`
  width: 28px;
  height: 28px;
`;

const OverlapGroup = styled.div`
  width: 315px;
  height: 63px;
  position: relative;
  margin-left: 2px;
  background-color: var(--wild-sand);
`;

const Text30 = styled.div`
  ${ChivoNormalCharade18px}
  position: absolute;
  width: 190px;
  top: 10px;
  left: 23px;
  letter-spacing: 0;
  text-decoration: underline;
`;

const Address = styled.div`
  ${ChivoLightCharade12px}
  position: absolute;
  width: 138px;
  top: 36px;
  left: 23px;
  letter-spacing: 0;
`;

export default Experiment1;
