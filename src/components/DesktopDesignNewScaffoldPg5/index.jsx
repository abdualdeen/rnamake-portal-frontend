import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav";
import styled from "styled-components";
import {
  ChivoNormalCharade24px,
  ChivoLightCharade24px,
  ChivoBoldCharade24px,
  ChivoLightCharade18px,
  ChivoNormalCharade18px,
  ChivoLightKashmirBlue48px,
} from "../../styledMixins";
import "./DesktopDesignNewScaffoldPg5.css";

function DesktopDesignNewScaffoldPg5(props) {
  const {
    text16,
    place,
    basePdb,
    basePairs,
    designs,
    computation,
    review,
    submit,
    text17,
    allocation,
    xdefault,
    computeResource,
    xdefault2,
    queue,
    xdefault3,
    nodeCount,
    number,
    surname,
    number2,
    text18,
    number3,
    coreCount,
    number4,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-design-new-scaffold-pg-5 screen">
        <FlexCol>
          <Nav />
          <Text16>{text16}</Text16>
          <Breadcrumbs>
            <Place>{place}</Place>
            <OverlapGroup>
              <Polygon5 src="/img/polygon-5@2x.svg" />
            </OverlapGroup>
            <BasePDB>{basePdb}</BasePDB>
            <OverlapGroup>
              <Polygon5 src="/img/polygon-5@2x.svg" />
            </OverlapGroup>
            <BasePairs>{basePairs}</BasePairs>
            <OverlapGroup>
              <Polygon5 src="/img/polygon-5@2x.svg" />
            </OverlapGroup>
            <Designs>{designs}</Designs>
            <OverlapGroup>
              <Polygon5 src="/img/polygon-5@2x.svg" />
            </OverlapGroup>
            <Computation>{computation}</Computation>
            <OverlapGroup4>
              <Polygon5 src="/img/polygon-5@2x.svg" />
            </OverlapGroup4>
            <Review>{review}</Review>
            <OverlapGroup>
              <Polygon5 src="/img/polygon-5@2x.svg" />
            </OverlapGroup>
            <Submit>{submit}</Submit>
          </Breadcrumbs>
          <Text17>{text17}</Text17>
        </FlexCol>
        <FlexRow>
          <FlexCol1>
            <FlexRow1>
              <Allocation>{allocation}</Allocation>
              <OverlapGroup8>
                <Default>{xdefault}</Default>
                <Polygon1 src="/img/polygon-1@2x.svg" />
              </OverlapGroup8>
            </FlexRow1>
            <FlexRow2>
              <ComputeResource>{computeResource}</ComputeResource>
              <OverlapGroup9>
                <Default>{xdefault2}</Default>
                <Polygon1 src="/img/polygon-1@2x.svg" />
              </OverlapGroup9>
            </FlexRow2>
            <FlexRow3>
              <Queue>{queue}</Queue>
              <OverlapGroup10>
                <Default>{xdefault3}</Default>
                <Polygon1 src="/img/polygon-1@2x.svg" />
              </OverlapGroup10>
            </FlexRow3>
            <FlexRow4>
              <NodeCount>{nodeCount}</NodeCount>
              <OverlapGroup6>
                <Rectangle45 src="/img/rectangle-45@2x.svg" />
                <Number>{number}</Number>
              </OverlapGroup6>
            </FlexRow4>
          </FlexCol1>
          <FlexCol2>
            <Group58>
              <Surname>{surname}</Surname>
              <Group47>
                <OverlapGroup1>
                  <Line1 src="/img/line-1@2x.svg" />
                  <Ellipse1></Ellipse1>
                </OverlapGroup1>
                <OverlapGroup2>
                  <Rectangle45 src="/img/rectangle-45-3@2x.svg" />
                  <Number>{number2}</Number>
                </OverlapGroup2>
              </Group47>
            </Group58>
            <Group57>
              <Surname>{text18}</Surname>
              <Group53>
                <OverlapGroup11>
                  <Line11 src="/img/line-1@2x.svg" />
                  <Ellipse11></Ellipse11>
                </OverlapGroup11>
                <OverlapGroup2>
                  <Rectangle45 src="/img/rectangle-45-2@2x.svg" />
                  <Number>{number3}</Number>
                </OverlapGroup2>
              </Group53>
            </Group57>
          </FlexCol2>
        </FlexRow>
        <FlexCol3>
          <FlexRow5>
            <CoreCount>{coreCount}</CoreCount>
            <OverlapGroup7>
              <Rectangle45 src="/img/rectangle-45-1@2x.svg" />
              <Number>{number4}</Number>
            </OverlapGroup7>
          </FlexRow5>
          <Group52>
            <Link to="/desktop-design-new-scaffold-pg-4">
              <Group50 src="/img/group-50@2x.svg" />
            </Link>
            <Link to="/desktop-design-new-scaffold-pg-6">
              <Group49 src="/img/group-49@2x.svg" />
            </Link>
          </Group52>
        </FlexCol3>
      </div>
    </div>
  );
}

const FlexCol = styled.div`
  width: 1285px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 328px;
`;

const Text16 = styled.div`
  ${ChivoLightKashmirBlue48px}
  min-height: 57px;
  margin-top: 35px;
  margin-left: 138px;
  min-width: 569px;
  text-align: center;
  letter-spacing: 0;
`;

const Breadcrumbs = styled.div`
  height: 29px;
  margin-top: 11px;
  margin-left: 168px;
  display: flex;
  align-items: center;
  min-width: 945px;
`;

const Place = styled.div`
  ${ChivoNormalCharade24px}
  min-height: 29px;
  min-width: 65px;
  text-align: center;
  letter-spacing: 0;
`;

const OverlapGroup = styled.div`
  height: 22px;
  margin-left: 13px;
  margin-top: 1px;
  display: flex;
  padding: 4px 0.3px;
  align-items: flex-end;
  min-width: 14px;
  background-image: url(/img/polygon-2@2x.svg);
  background-size: 100% 100%;
`;

const Polygon5 = styled.img`
  width: 10px;
  height: 14px;
  margin-bottom: 0;
`;

const BasePDB = styled.div`
  ${ChivoNormalCharade24px}
  min-height: 29px;
  margin-left: 13px;
  min-width: 109px;
  text-align: center;
  letter-spacing: 0;
`;

const BasePairs = styled.div`
  ${ChivoNormalCharade24px}
  min-height: 29px;
  margin-left: 13px;
  min-width: 122px;
  text-align: center;
  letter-spacing: 0;
`;

const Designs = styled.div`
  ${ChivoNormalCharade24px}
  min-height: 29px;
  margin-left: 13px;
  min-width: 90px;
  text-align: center;
  letter-spacing: 0;
`;

const Computation = styled.div`
  ${ChivoBoldCharade24px}
  min-height: 29px;
  margin-left: 11px;
  min-width: 149px;
  text-align: center;
  letter-spacing: 0;
`;

const OverlapGroup4 = styled.div`
  height: 22px;
  margin-left: 10px;
  margin-top: 1px;
  display: flex;
  padding: 4px 0.3px;
  align-items: flex-end;
  min-width: 14px;
  background-image: url(/img/polygon-2@2x.svg);
  background-size: 100% 100%;
`;

const Review = styled.div`
  ${ChivoLightCharade24px}
  min-height: 29px;
  margin-left: 13px;
  min-width: 81px;
  text-align: center;
  letter-spacing: 0;
`;

const Submit = styled.div`
  ${ChivoLightCharade24px}
  min-height: 29px;
  margin-left: 13px;
  min-width: 80px;
  text-align: center;
  letter-spacing: 0;
`;

const Text17 = styled.div`
  ${ChivoLightCharade18px}
  width: 1130px;
  min-height: 21px;
  align-self: flex-end;
  margin-top: 60px;
  text-align: center;
  letter-spacing: 0;
`;

const FlexRow = styled.div`
  height: 229px;
  align-self: center;
  margin-top: 60px;
  margin-left: 14px;
  display: flex;
  align-items: flex-start;
  min-width: 1048px;
`;

const FlexCol1 = styled.div`
  ${ChivoNormalCharade18px}
  width: 458px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 209px;
`;

const FlexRow1 = styled.div`
  display: flex;
  align-items: center;
  min-width: 458px;
`;

const Allocation = styled.div`
  min-height: 21px;
  margin-bottom: 1px;
  min-width: 84px;
  letter-spacing: 0;
`;

const OverlapGroup8 = styled.div`
  height: 34px;
  margin-left: 133px;
  display: flex;
  padding: 8.7px 16px;
  align-items: center;
  min-width: 239px;
  background-image: url(/img/rectangle-17@2x.svg);
  background-size: 100% 100%;
`;

const Default = styled.div`
  width: 93px;
  min-height: 17px;
  align-self: flex-end;
  letter-spacing: 0;
`;

const Polygon1 = styled.img`
  width: 11px;
  height: 9px;
  margin-left: 102px;
  margin-top: 0.67px;
`;

const FlexRow2 = styled.div`
  margin-top: 25px;
  display: flex;
  align-items: center;
  min-width: 458px;
`;

const FlexRow3 = styled.div`
  ${ChivoNormalCharade18px}
  margin-top: 25px;
  display: flex;
  align-items: center;
  min-width: 458px;
`;

const ComputeResource = styled.div`
  min-height: 21px;
  margin-bottom: 1px;
  min-width: 162px;
  letter-spacing: 0;
`;

const OverlapGroup9 = styled.div`
  height: 34px;
  margin-left: 55px;
  display: flex;
  padding: 8.7px 16px;
  align-items: center;
  min-width: 239px;
  background-image: url(/img/rectangle-17-1@2x.svg);
  background-size: 100% 100%;
`;

const Queue = styled.div`
  min-height: 21px;
  margin-bottom: 1px;
  min-width: 55px;
  letter-spacing: 0;
`;

const OverlapGroup10 = styled.div`
  height: 34px;
  margin-left: 162px;
  display: flex;
  padding: 8.7px 16px;
  align-items: center;
  min-width: 239px;
  background-image: url(/img/rectangle-17-2@2x.svg);
  background-size: 100% 100%;
`;

const FlexRow4 = styled.div`
  margin-top: 23px;
  display: flex;
  align-items: center;
  min-width: 272px;
`;

const NodeCount = styled.div`
  ${ChivoNormalCharade18px}
  min-height: 21px;
  margin-top: 3px;
  min-width: 98px;
  letter-spacing: 0;
`;

const OverlapGroup6 = styled.div`
  width: 59px;
  height: 34px;
  position: relative;
  margin-left: 113px;
`;

const Rectangle45 = styled.img`
  position: absolute;
  width: 48px;
  height: 34px;
  top: 0;
  left: 6px;
`;

const Number = styled.div`
  ${ChivoNormalCharade18px}
  position: absolute;
  width: 59px;
  top: 7px;
  left: 0;
  text-align: center;
  letter-spacing: 0;
`;

const FlexCol2 = styled.div`
  width: 509px;
  align-self: flex-end;
  margin-left: 81px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 198px;
`;

const Group58 = styled.div`
  width: 507px;
  margin-left: 2px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 80px;
`;

const Surname = styled.div`
  ${ChivoNormalCharade18px}
  min-height: 21px;
  letter-spacing: 0;
`;

const Group47 = styled.div`
  margin-top: 25px;
  margin-left: 2px;
  display: flex;
  align-items: center;
  min-width: 503px;
`;

const OverlapGroup1 = styled.div`
  width: 427px;
  height: 24px;
  position: relative;
  margin-bottom: 2px;
`;

const Line1 = styled.img`
  position: absolute;
  width: 427px;
  height: 2px;
  top: 12px;
  left: 0;
`;

const Ellipse1 = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 0;
  left: 396px;
  background-color: var(--caribbean-green);
  border-radius: 12px;
`;

const OverlapGroup2 = styled.div`
  width: 59px;
  height: 34px;
  position: relative;
  margin-left: 17px;
`;

const Group57 = styled.div`
  width: 507px;
  margin-top: 38px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 80px;
`;

const Group53 = styled.div`
  margin-top: 25px;
  margin-left: 2px;
  display: flex;
  align-items: center;
  min-width: 505px;
`;

const OverlapGroup11 = styled.div`
  width: 427px;
  height: 24px;
  position: relative;
`;

const Line11 = styled.img`
  position: absolute;
  width: 427px;
  height: 2px;
  top: 11px;
  left: 0;
`;

const Ellipse11 = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 0;
  left: 287px;
  background-color: var(--caribbean-green);
  border-radius: 12px;
`;

const FlexCol3 = styled.div`
  width: 1440px;
  margin-top: 7px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 316px;
`;

const FlexRow5 = styled.div`
  margin-left: 203px;
  display: flex;
  align-items: center;
  min-width: 272px;
`;

const CoreCount = styled.div`
  ${ChivoNormalCharade18px}
  min-height: 21px;
  margin-bottom: 1px;
  min-width: 96px;
  letter-spacing: 0;
`;

const OverlapGroup7 = styled.div`
  width: 59px;
  height: 34px;
  position: relative;
  margin-left: 115px;
`;

const Group52 = styled.div`
  height: 170px;
  margin-top: 112px;
  display: flex;
  padding: 0 80px;
  align-items: flex-start;
  min-width: 1440px;
  background-color: var(--wild-sand);
`;

const Group50 = styled.img`
  width: 83px;
  height: 83px;
  cursor: pointer;
`;

const Group49 = styled.img`
  width: 83px;
  height: 83px;
  margin-left: 1113px;
  cursor: pointer;
`;

export default DesktopDesignNewScaffoldPg5;
