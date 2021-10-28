import React from "react";
import Scaffold from "../Scaffold";
import styled from "styled-components";
import { ChivoNormalCharade18px, ChivoLightCharade12px } from "../../styledMixins";


function Experiment3(props) {
  const { text3, address, scaffoldProps } = props;

  return (
    <Experiment31>
      <OverlapGroup1>
        <Completed1 src="/img/completed-1@2x.svg" />
      </OverlapGroup1>
      <OverlapGroup>
        <Text32>{text3}</Text32>
        <Address>{address}</Address>
      </OverlapGroup>
      <Scaffold className={scaffoldProps.className} />
    </Experiment31>
  );
}

const Experiment31 = styled.div`
  position: relative;
  margin-top: 4px;
  display: flex;
  align-items: flex-start;
  min-width: 445px;
`;

const OverlapGroup1 = styled.div`
  height: 63px;
  display: flex;
  padding: 16px 16.5px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 63px;
  background-color: var(--wild-sand);
`;

const Completed1 = styled.img`
  width: 29px;
  height: 28px;
`;

const OverlapGroup = styled.div`
  width: 315px;
  height: 63px;
  position: relative;
  margin-left: 2px;
  background-color: var(--wild-sand);
`;

const Text32 = styled.div`
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

export default Experiment3;
