import React from "react";
import Experiment1 from "../Experiment1";
import Experiment3 from "../Experiment3";
import Scaffold from "../Scaffold";
import styled from "styled-components";
import {
  ChivoLightKashmirBlue96px,
  ChivoNormalCharade24px,
  ChivoNormalCharade18px,
  ChivoLightCharade12px,
  ChivoNormalCharade28px,
} from "../../styledMixins";
import "./DesktopPortalHome.css";

function DesktopPortalHome(props) {
  const {
    title,
    x3DDesignToolkit,
    place,
    place2,
    recentExperiments,
    text6,
    address,
    experiment1Props,
    experiment12Props,
    experiment3Props,
    experiment32Props,
    experiment33Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-portal-home screen">
        <FlexCol>
          <OverlapGroup7>
            <OverlapGroup5>
              <OverlapGroup>
                <RNAMake>{title}</RNAMake>
                <X3DDesignToolkit>{x3DDesignToolkit}</X3DDesignToolkit>
              </OverlapGroup>
              <RNASVG src="/img/rna-svg-1@2x.svg" />
            </OverlapGroup5>
            <Group18>
              <Place>{place}</Place>
              <Place1>{place2}</Place1>
            </Group18>
          </OverlapGroup7>
          <DesignNewRNAScaffold src="/img/design-new-rna-scaffold@1x.svg" />
        </FlexCol>
        <OverlapGroup4>
          <RecentExperiments>{recentExperiments}</RecentExperiments>
          <OverlapGroup6>
            <Experiment1 text1={experiment1Props.text1} address={experiment1Props.address} />
            <Experiment1
              text1={experiment12Props.text1}
              address={experiment12Props.address}
              className={experiment12Props.className}
            />
            <Experiment3
              text3={experiment3Props.text3}
              address={experiment3Props.address}
              scaffoldProps={experiment3Props.scaffoldProps}
            />
            <Experiment4>
              <Failed>
                <SubmissionFailed1 src="/img/submission-failed-1@2x.svg" />
              </Failed>
              <OverlapGroup1>
                <Text35>{text6}</Text35>
                <Address>{address}</Address>
              </OverlapGroup1>
              <Scaffold />
            </Experiment4>
            <Experiment3
              text3={experiment32Props.text3}
              address={experiment32Props.address}
              scaffoldProps={experiment32Props.scaffoldProps}
            />
            <Experiment3
              text3={experiment33Props.text3}
              address={experiment33Props.address}
              scaffoldProps={experiment33Props.scaffoldProps}
            />
          </OverlapGroup6>
        </OverlapGroup4>
      </div>
    </div>
  );
}

const FlexCol = styled.div`
  width: 770px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 559px;
`;

const OverlapGroup7 = styled.div`
  width: 734px;
  height: 378px;
  position: relative;
`;

const OverlapGroup5 = styled.div`
  position: absolute;
  width: 674px;
  height: 333px;
  top: 45px;
  left: 60px;
`;

const OverlapGroup = styled.div`
  position: absolute;
  width: 574px;
  height: 130px;
  top: 173px;
  left: 0;
`;

const RNAMake = styled.div`
  ${ChivoLightKashmirBlue96px}
  position: absolute;
  width: 574px;
  top: 0;
  left: 0;
  text-align: center;
  letter-spacing: 0;
`;

const X3DDesignToolkit = styled.div`
  ${ChivoNormalCharade28px}
  position: absolute;
  width: 292px;
  top: 97px;
  left: 141px;
  text-align: center;
  letter-spacing: 0;
`;

const RNASVG = styled.img`
  position: absolute;
  width: 286px;
  height: 333px;
  top: 0;
  left: 388px;
`;

const Group18 = styled.div`
  ${ChivoNormalCharade24px}
  position: absolute;
  height: 115px;
  top: 0;
  left: 0;
  display: flex;
  padding: 0 15.4px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 347px;
  background-color: var(--wild-sand);
`;

const Place = styled.div`
  width: 115px;
  min-height: 73px;
  margin-bottom: 0;
  text-align: center;
  letter-spacing: 0;
`;

const Place1 = styled.div`
  width: 115px;
  min-height: 73px;
  margin-left: 26px;
  margin-bottom: -0.33px;
  text-align: center;
  letter-spacing: 0;
`;

const DesignNewRNAScaffold = styled.img`
  width: 641px;
  height: 91px;
  align-self: flex-end;
  margin-top: 90px;
`;

const OverlapGroup4 = styled.div`
  width: 548px;
  margin-left: 125px;
  display: flex;
  flex-direction: column;
  padding: 46px 32px;
  align-items: flex-start;
  min-height: 1000px;
  background-color: var(--mystic);
`;

const RecentExperiments = styled.div`
  ${ChivoNormalCharade24px}
  width: 392px;
  min-height: 29px;
  margin-top: 3px;
  margin-left: 1px;
  letter-spacing: 0;
`;

const OverlapGroup6 = styled.div`
  width: 483px;
  position: relative;
  align-self: flex-end;
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  padding: 21px 18px;
  align-items: flex-start;
  min-height: 854px;
  background-image: url(/img/rectangle-25@1x.svg);
  background-size: 100% 100%;
`;

const Experiment4 = styled.div`
  position: relative;
  margin-top: 4px;
  display: flex;
  align-items: flex-start;
  min-width: 445px;
`;

const Failed = styled.div`
  height: 63px;
  display: flex;
  padding: 17px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 63px;
  background-color: var(--wild-sand);
`;

const SubmissionFailed1 = styled.img`
  width: 28px;
  height: 28px;
`;

const OverlapGroup1 = styled.div`
  width: 315px;
  height: 63px;
  position: relative;
  margin-left: 2px;
  background-color: var(--wild-sand);
`;

const Text35 = styled.div`
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

export default DesktopPortalHome;
