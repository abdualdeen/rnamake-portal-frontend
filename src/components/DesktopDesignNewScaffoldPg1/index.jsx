import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav";
import styled from "styled-components";
import {
  ChivoLightLynch16px,
  ChivoLightCharade24px,
  ChivoBoldCharade24px,
  ChivoLightCharade18px,
  ChivoNormalCharade18px,
  ChivoLightKashmirBlue48px,
} from "../../styledMixins";
import "./DesktopDesignNewScaffoldPg1.css";

function DesktopDesignNewScaffoldPg1(props) {
  const {
    text13,
    place,
    basePdb,
    basePairs,
    designs,
    computation,
    review,
    submit,
    rnaScaffoldName,
    enterScaffoldName,
    text10,
    text12,
    enterDescription,
    text11,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-design-new-scaffold-pg-1 screen">
        <Nav />
        <Text13>{text13}</Text13>
        <Breadcrumbs>
          <Place>{place}</Place>
          <OverlapGroup>
            <Polygon5 src="/img/polygon-5-24@2x.svg" />
          </OverlapGroup>
          <BasePDB>{basePdb}</BasePDB>
          <OverlapGroup>
            <Polygon5 src="/img/polygon-5-24@2x.svg" />
          </OverlapGroup>
          <BasePairs>{basePairs}</BasePairs>
          <OverlapGroup>
            <Polygon5 src="/img/polygon-5-24@2x.svg" />
          </OverlapGroup>
          <Designs>{designs}</Designs>
          <OverlapGroup>
            <Polygon5 src="/img/polygon-5-24@2x.svg" />
          </OverlapGroup>
          <Computation>{computation}</Computation>
          <OverlapGroup>
            <Polygon5 src="/img/polygon-5-24@2x.svg" />
          </OverlapGroup>
          <Review>{review}</Review>
          <OverlapGroup>
            <Polygon5 src="/img/polygon-5-24@2x.svg" />
          </OverlapGroup>
          <Submit>{submit}</Submit>
        </Breadcrumbs>
        <RNAScaffoldName>{rnaScaffoldName}</RNAScaffoldName>
        <FlexRow>
          <OverlapGroup6>
            <EnterScaffoldName>{enterScaffoldName}</EnterScaffoldName>
          </OverlapGroup6>
          <Text10>{text10}</Text10>
        </FlexRow>
        <Text12>{text12}</Text12>
        <FlexRow1>
          <OverlapGroup7>
            <EnterDescription>{enterDescription}</EnterDescription>
          </OverlapGroup7>
          <Text11>{text11}</Text11>
        </FlexRow1>
        <Group52>
          <Link to="/desktop-design-new-scaffold-pg-2">
            <Group51>
              <Group49 src="/img/group-49-3@2x.svg" />
            </Group51>
          </Link>
        </Group52>
      </div>
    </div>
  );
}

const Text13 = styled.div`
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
  margin-left: 12px;
  display: flex;
  align-items: center;
  min-width: 946px;
`;

const Place = styled.div`
  ${ChivoBoldCharade24px}
  min-height: 29px;
  min-width: 66px;
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
  ${ChivoLightCharade24px}
  min-height: 29px;
  margin-left: 13px;
  min-width: 109px;
  text-align: center;
  letter-spacing: 0;
`;

const BasePairs = styled.div`
  ${ChivoLightCharade24px}
  min-height: 29px;
  margin-left: 13px;
  min-width: 122px;
  text-align: center;
  letter-spacing: 0;
`;

const Designs = styled.div`
  ${ChivoLightCharade24px}
  min-height: 29px;
  margin-left: 13px;
  min-width: 90px;
  text-align: center;
  letter-spacing: 0;
`;

const Computation = styled.div`
  ${ChivoLightCharade24px}
  min-height: 29px;
  margin-left: 13px;
  min-width: 144px;
  text-align: center;
  letter-spacing: 0;
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

const RNAScaffoldName = styled.div`
  ${ChivoNormalCharade18px}
  min-height: 21px;
  align-self: flex-start;
  margin-top: 74px;
  margin-left: 253px;
  letter-spacing: 0;
`;

const FlexRow = styled.div`
  margin-top: 11px;
  margin-left: 126px;
  display: flex;
  align-items: flex-start;
  min-width: 1060px;
`;

const OverlapGroup6 = styled.div`
  height: 46px;
  display: flex;
  padding: 13px 20px;
  align-items: flex-end;
  min-width: 547px;
  background-image: url(/img/rectangle-27@1x.svg);
  background-size: 100% 100%;
`;

const EnterScaffoldName = styled.div`
  ${ChivoLightLynch16px}
  min-height: 19px;
  min-width: 154px;
  letter-spacing: 0;
`;

const Text10 = styled.div`
  ${ChivoLightCharade18px}
  width: 432px;
  min-height: 42px;
  margin-left: 81px;
  letter-spacing: 0;
`;

const Text12 = styled.div`
  ${ChivoNormalCharade18px}
  min-height: 21px;
  align-self: flex-start;
  margin-top: 46px;
  margin-left: 253px;
  letter-spacing: 0;
`;

const FlexRow1 = styled.div`
  margin-top: 9px;
  margin-left: 126px;
  display: flex;
  align-items: flex-start;
  min-width: 1060px;
`;

const OverlapGroup7 = styled.div`
  height: 242px;
  display: flex;
  padding: 23px 20px;
  align-items: flex-start;
  min-width: 547px;
  background-image: url(/img/rectangle-28@1x.svg);
  background-size: 100% 100%;
`;

const EnterDescription = styled.div`
  ${ChivoLightLynch16px}
  min-height: 19px;
  letter-spacing: 0;
`;

const Text11 = styled.div`
  ${ChivoLightCharade18px}
  width: 432px;
  min-height: 84px;
  margin-left: 81px;
  letter-spacing: 0;
`;

const Group52 = styled.div`
  height: 170px;
  margin-top: 53px;
  display: flex;
  padding: 0 85px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 1440px;
  background-color: var(--wild-sand);
`;

const Group51 = styled.div`
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  min-width: 75px;
  cursor: pointer;
`;

const Group49 = styled.img`
  width: 83px;
  height: 83px;
  margin-bottom: -8px;
`;

export default DesktopDesignNewScaffoldPg1;
