import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav";
import styled from "styled-components";
import {
  ChivoLightBlack18px,
  ChivoNormalCharade24px,
  ChivoLightCharade24px,
  ChivoBoldCharade24px,
  ChivoLightCharade18px,
  ChivoNormalCharade18px,
  ChivoLightKashmirBlue48px,
} from "../../styledMixins";
import "./DesktopDesignNewScaffoldPg6.css";

function DesktopDesignNewScaffoldPg6(props) {
  const {
    text21,
    place,
    basePdb,
    basePairs,
    designs,
    computation,
    review,
    submit,
    text22,
    experimentName,
    exampleName,
    allocation,
    xdefault,
    description,
    text23,
    computeResource,
    xdefault2,
    pbdFile,
    text24,
    queue,
    xdefault3,
    startBasePair,
    a141A162,
    nodeCount,
    number,
    endBasePair,
    a221A252,
    coreCount,
    number2,
    numberOfDesigns,
    number3,
    surname,
    address,
    numberOfSequences,
    number4,
    physicalMemory,
    x100Mb,
    submit2,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-design-new-scaffold-pg-6 screen">
        <Nav />
        <Text21>{text21}</Text21>
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
          <OverlapGroup4>
            <Polygon5 src="/img/polygon-5@2x.svg" />
          </OverlapGroup4>
          <Submit>{submit}</Submit>
        </Breadcrumbs>
        <Text22>{text22}</Text22>
        <FlexRow>
          <ExperimentName>{experimentName}</ExperimentName>
          <ExampleName>{exampleName}</ExampleName>
          <Allocation>{allocation}</Allocation>
          <Default>{xdefault}</Default>
        </FlexRow>
        <FlexRow1>
          <Description>{description}</Description>
          <Text23>{text23}</Text23>
          <ComputeResource>{computeResource}</ComputeResource>
          <Default1>{xdefault2}</Default1>
        </FlexRow1>
        <FlexRow1>
          <PBDFile>{pbdFile}</PBDFile>
          <Text24>{text24}</Text24>
          <Queue>{queue}</Queue>
          <Default2>{xdefault3}</Default2>
        </FlexRow1>
        <FlexRow2>
          <StartBasePair>{startBasePair}</StartBasePair>
          <A141A162>{a141A162}</A141A162>
          <NodeCount>{nodeCount}</NodeCount>
          <Number>{number}</Number>
        </FlexRow2>
        <FlexRow2>
          <EndBasePair>{endBasePair}</EndBasePair>
          <A221A252>{a221A252}</A221A252>
          <CoreCount>{coreCount}</CoreCount>
          <Number1>{number2}</Number1>
        </FlexRow2>
        <FlexRow3>
          <NumberOfDesigns>{numberOfDesigns}</NumberOfDesigns>
          <Number2>{number3}</Number2>
          <Surname>{surname}</Surname>
          <Address>{address}</Address>
        </FlexRow3>
        <FlexRow4>
          <NumberOfSequences>{numberOfSequences}</NumberOfSequences>
          <Number3>{number4}</Number3>
          <PhysicalMemory>{physicalMemory}</PhysicalMemory>
          <X100MB>{x100Mb}</X100MB>
        </FlexRow4>
        <Group52>
          <Link to="/desktop-design-new-scaffold-pg-5">
            <Group50 src="/img/group-50-1@2x.svg" />
          </Link>
          <Link to="/desktop-design-new-scaffold-pg-7">
            <Group63>
              <OverlapGroup1>
                <Submit1>{submit2}</Submit1>
              </OverlapGroup1>
            </Group63>
          </Link>
        </Group52>
      </div>
    </div>
  );
}

const Text21 = styled.div`
  ${ChivoLightKashmirBlue48px}
  min-height: 57px;
  margin-top: 35px;
  margin-right: 17px;
  min-width: 569px;
  text-align: center;
  letter-spacing: 0;
`;

const Breadcrumbs = styled.div`
  height: 29px;
  margin-top: 11px;
  margin-left: 13px;
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
  ${ChivoNormalCharade24px}
  min-height: 29px;
  margin-left: 13px;
  min-width: 145px;
  text-align: center;
  letter-spacing: 0;
`;

const OverlapGroup4 = styled.div`
  height: 22px;
  margin-left: 12px;
  margin-top: 1px;
  display: flex;
  padding: 4px 0.3px;
  align-items: flex-end;
  min-width: 14px;
  background-image: url(/img/polygon-2@2x.svg);
  background-size: 100% 100%;
`;

const Review = styled.div`
  ${ChivoBoldCharade24px}
  min-height: 29px;
  margin-left: 11px;
  min-width: 84px;
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

const Text22 = styled.div`
  ${ChivoLightCharade18px}
  width: 1130px;
  min-height: 21px;
  margin-top: 60px;
  text-align: center;
  letter-spacing: 0;
`;

const FlexRow = styled.div`
  height: 21px;
  margin-top: 68px;
  margin-right: 126px;
  display: flex;
  align-items: flex-start;
  min-width: 760px;
`;

const ExperimentName = styled.div`
  ${ChivoNormalCharade18px}
  min-height: 21px;
  min-width: 150px;
  letter-spacing: 0;
`;

const ExampleName = styled.div`
  ${ChivoLightBlack18px}
  min-height: 21px;
  margin-left: 67px;
  min-width: 125px;
  letter-spacing: 0;
`;

const Allocation = styled.div`
  ${ChivoNormalCharade18px}
  min-height: 21px;
  margin-left: 165px;
  min-width: 84px;
  letter-spacing: 0;
`;

const Default = styled.div`
  ${ChivoLightBlack18px}
  min-height: 21px;
  margin-left: 108px;
  letter-spacing: 0;
`;

const FlexRow1 = styled.div`
  height: 21px;
  margin-top: 23px;
  margin-right: 126px;
  display: flex;
  align-items: flex-start;
  min-width: 760px;
`;

const Description = styled.div`
  ${ChivoNormalCharade18px}
  min-height: 21px;
  min-width: 98px;
  letter-spacing: 0;
`;

const Text23 = styled.div`
  ${ChivoLightBlack18px}
  min-height: 21px;
  margin-left: 119px;
  min-width: 224px;
  letter-spacing: 0;
`;

const ComputeResource = styled.div`
  ${ChivoNormalCharade18px}
  min-height: 21px;
  margin-left: 66px;
  min-width: 162px;
  letter-spacing: 0;
`;

const Default1 = styled.div`
  ${ChivoLightBlack18px}
  min-height: 21px;
  margin-left: 30px;
  letter-spacing: 0;
`;

const PBDFile = styled.div`
  ${ChivoNormalCharade18px}
  min-height: 21px;
  min-width: 69px;
  letter-spacing: 0;
`;

const Text24 = styled.div`
  ${ChivoLightBlack18px}
  min-height: 21px;
  margin-left: 148px;
  min-width: 189px;
  letter-spacing: 0;
`;

const Queue = styled.div`
  ${ChivoNormalCharade18px}
  min-height: 21px;
  margin-left: 101px;
  min-width: 55px;
  letter-spacing: 0;
`;

const Default2 = styled.div`
  ${ChivoLightBlack18px}
  min-height: 21px;
  margin-left: 137px;
  letter-spacing: 0;
`;

const FlexRow2 = styled.div`
  height: 21px;
  margin-top: 23px;
  margin-right: 175px;
  display: flex;
  align-items: flex-start;
  min-width: 711px;
`;

const StartBasePair = styled.div`
  ${ChivoNormalCharade18px}
  min-height: 21px;
  min-width: 130px;
  letter-spacing: 0;
`;

const A141A162 = styled.div`
  ${ChivoLightBlack18px}
  min-height: 21px;
  margin-left: 87px;
  min-width: 97px;
  letter-spacing: 0;
`;

const NodeCount = styled.div`
  ${ChivoNormalCharade18px}
  min-height: 21px;
  margin-left: 193px;
  min-width: 98px;
  letter-spacing: 0;
`;

const Number = styled.div`
  ${ChivoLightBlack18px}
  min-height: 21px;
  margin-left: 94px;
  letter-spacing: 0;
`;

const EndBasePair = styled.div`
  ${ChivoNormalCharade18px}
  min-height: 21px;
  min-width: 118px;
  letter-spacing: 0;
`;

const A221A252 = styled.div`
  ${ChivoLightBlack18px}
  min-height: 21px;
  margin-left: 99px;
  min-width: 97px;
  letter-spacing: 0;
`;

const CoreCount = styled.div`
  ${ChivoNormalCharade18px}
  min-height: 21px;
  margin-left: 193px;
  min-width: 96px;
  letter-spacing: 0;
`;

const Number1 = styled.div`
  ${ChivoLightBlack18px}
  min-height: 21px;
  margin-left: 96px;
  letter-spacing: 0;
`;

const FlexRow3 = styled.div`
  height: 21px;
  margin-top: 23px;
  margin-right: 92px;
  display: flex;
  align-items: flex-start;
  min-width: 794px;
`;

const NumberOfDesigns = styled.div`
  ${ChivoNormalCharade18px}
  min-height: 21px;
  min-width: 161px;
  letter-spacing: 0;
`;

const Number2 = styled.div`
  ${ChivoLightBlack18px}
  min-height: 21px;
  margin-left: 56px;
  min-width: 23px;
  letter-spacing: 0;
`;

const Surname = styled.div`
  ${ChivoNormalCharade18px}
  min-height: 21px;
  margin-left: 267px;
  min-width: 127px;
  letter-spacing: 0;
`;

const Address = styled.div`
  ${ChivoLightBlack18px}
  min-height: 21px;
  margin-left: 65px;
  letter-spacing: 0;
`;

const FlexRow4 = styled.div`
  height: 21px;
  margin-top: 23px;
  margin-right: 125px;
  display: flex;
  align-items: flex-start;
  min-width: 761px;
`;

const NumberOfSequences = styled.div`
  ${ChivoNormalCharade18px}
  min-height: 21px;
  min-width: 187px;
  letter-spacing: 0;
`;

const Number3 = styled.div`
  ${ChivoLightBlack18px}
  min-height: 21px;
  margin-left: 30px;
  min-width: 12px;
  letter-spacing: 0;
`;

const PhysicalMemory = styled.div`
  ${ChivoNormalCharade18px}
  min-height: 21px;
  margin-left: 278px;
  min-width: 146px;
  letter-spacing: 0;
`;

const X100MB = styled.div`
  ${ChivoLightBlack18px}
  min-height: 21px;
  margin-left: 46px;
  letter-spacing: 0;
`;

const Group52 = styled.div`
  height: 170px;
  margin-top: 89px;
  display: flex;
  padding: 0 76px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 1440px;
  background-color: var(--wild-sand);
`;

const Group50 = styled.img`
  width: 83px;
  height: 83px;
  cursor: pointer;
`;

const Group63 = styled.div`
  margin-left: 1068px;
  display: flex;
  align-items: flex-start;
  min-width: 133px;
  cursor: pointer;
`;

const OverlapGroup1 = styled.div`
  height: 75px;
  display: flex;
  padding: 22px 24px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 131px;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  box-shadow: 0px 4px 4px #00000040;
`;

const Submit1 = styled.div`
  min-height: 29px;
  font-family: var(--font-family-chivo);
  font-weight: 700;
  color: var(--wild-sand);
  font-size: var(--font-size-l);
  letter-spacing: 0;
`;

export default DesktopDesignNewScaffoldPg6;
