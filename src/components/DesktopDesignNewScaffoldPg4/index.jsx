import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav";
import styled from "styled-components";
import {
  ChivoNormalCharade24px,
  ChivoLightCharade24px,
  ChivoBoldCharade24px,
  ChivoNormalCharade18px,
  ChivoLightKashmirBlue48px,
} from "../../styledMixins";
import "./DesktopDesignNewScaffoldPg4.css";

function DesktopDesignNewScaffoldPg4(props) {
  const {
    text14,
    place,
    basePdb,
    basePairs,
    designs,
    computation,
    review,
    submit,
    numberOfDesigns,
    number,
    text15,
    number2,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-design-new-scaffold-pg-4 screen">
        <Nav />
        <Text14>{text14}</Text14>
        <Breadcrumbs>
          <Place>{place}</Place>
          <OverlapGroup>
            <Polygon5 src="/img/polygon-5-18@2x.svg" />
          </OverlapGroup>
          <BasePDB>{basePdb}</BasePDB>
          <OverlapGroup>
            <Polygon5 src="/img/polygon-5-18@2x.svg" />
          </OverlapGroup>
          <BasePairs>{basePairs}</BasePairs>
          <OverlapGroup>
            <Polygon5 src="/img/polygon-5-18@2x.svg" />
          </OverlapGroup>
          <Designs>{designs}</Designs>
          <OverlapGroup3>
            <Polygon5 src="/img/polygon-5-18@2x.svg" />
          </OverlapGroup3>
          <Computation>{computation}</Computation>
          <OverlapGroup>
            <Polygon5 src="/img/polygon-5-18@2x.svg" />
          </OverlapGroup>
          <Review>{review}</Review>
          <OverlapGroup>
            <Polygon5 src="/img/polygon-5-18@2x.svg" />
          </OverlapGroup>
          <Submit>{submit}</Submit>
        </Breadcrumbs>
        <FlexRow>
          <Group46>
            <NumberOfDesigns>{numberOfDesigns}</NumberOfDesigns>
            <OverlapGroup6>
              <Line1 src="/img/line-1-2@1x.svg" />
              <Ellipse1></Ellipse1>
            </OverlapGroup6>
          </Group46>
          <OverlapGroup8>
            <Rectangle45 src="/img/rectangle-45-4@2x.svg" />
            <Number>{number}</Number>
          </OverlapGroup8>
        </FlexRow>
        <FlexRow1>
          <Group47>
            <NumberOfDesigns>{text15}</NumberOfDesigns>
            <OverlapGroup7>
              <Line11 src="/img/line-1-3@1x.svg" />
              <Ellipse11></Ellipse11>
            </OverlapGroup7>
          </Group47>
          <OverlapGroup9>
            <Rectangle45 src="/img/rectangle-45-5@2x.svg" />
            <Number>{number2}</Number>
          </OverlapGroup9>
        </FlexRow1>
        <Group52>
          <Link to="/desktop-design-new-scaffold-pg-2">
            <Group51>
              <Link to="/desktop-design-new-scaffold-pg-3">
                <Group50 src="/img/group-50-2@2x.svg" />
              </Link>
              <Link to="/desktop-design-new-scaffold-pg-5">
                <Group49 src="/img/group-49-1@2x.svg" />
              </Link>
            </Group51>
          </Link>
        </Group52>
      </div>
    </div>
  );
}

const Text14 = styled.div`
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
  ${ChivoBoldCharade24px}
  min-height: 29px;
  margin-left: 12px;
  min-width: 92px;
  text-align: center;
  letter-spacing: 0;
`;

const OverlapGroup3 = styled.div`
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

const FlexRow = styled.div`
  height: 81px;
  margin-top: 127px;
  margin-left: 72px;
  display: flex;
  align-items: flex-start;
  min-width: 644px;
`;

const Group46 = styled.div`
  width: 576px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 77px;
`;

const NumberOfDesigns = styled.div`
  ${ChivoNormalCharade18px}
  width: 494px;
  min-height: 21px;
  letter-spacing: 0;
`;

const OverlapGroup6 = styled.div`
  width: 574px;
  height: 24px;
  position: relative;
  margin-top: 32px;
`;

const Line1 = styled.img`
  position: absolute;
  width: 574px;
  height: 2px;
  top: 10px;
  left: 0;
`;

const Ellipse1 = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 0;
  left: 197px;
  background-color: var(--caribbean-green);
  border-radius: 12px;
`;

const OverlapGroup8 = styled.div`
  width: 59px;
  height: 34px;
  position: relative;
  align-self: flex-end;
  margin-left: 7px;
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

const FlexRow1 = styled.div`
  height: 81px;
  margin-top: 71px;
  margin-left: 72px;
  display: flex;
  align-items: flex-start;
  min-width: 644px;
`;

const Group47 = styled.div`
  width: 581px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 77px;
`;

const OverlapGroup7 = styled.div`
  width: 577px;
  height: 24px;
  position: relative;
  margin-top: 32px;
  margin-left: 2px;
`;

const Line11 = styled.img`
  position: absolute;
  width: 577px;
  height: 2px;
  top: 10px;
  left: 0;
`;

const Ellipse11 = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 0;
  left: 94px;
  background-color: var(--caribbean-green);
  border-radius: 12px;
`;

const OverlapGroup9 = styled.div`
  width: 59px;
  height: 34px;
  position: relative;
  align-self: flex-end;
  margin-left: 2px;
`;

const Group52 = styled.div`
  height: 170px;
  margin-top: 163px;
  display: flex;
  padding: 0 84px;
  align-items: flex-start;
  min-width: 1440px;
  background-color: var(--wild-sand);
`;

const Group51 = styled.div`
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  min-width: 1271px;
  cursor: pointer;
`;

const Group50 = styled.img`
  width: 83px;
  height: 83px;
  margin-bottom: -8px;
  cursor: pointer;
`;

const Group49 = styled.img`
  width: 83px;
  height: 83px;
  margin-left: 1113px;
  margin-bottom: -8px;
  cursor: pointer;
`;

export default DesktopDesignNewScaffoldPg4;
