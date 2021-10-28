import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav";
import styled from "styled-components";
import {
  ChivoNormalCharade24px,
  ChivoLightCharade24px,
  ChivoBoldCharade24px,
  ChivoLightCharade18px,
  ChivoLightKashmirBlue48px,
} from "../../styledMixins";
import "./DesktopDesignNewScaffoldPg2.css";

function DesktopDesignNewScaffoldPg2(props) {
  const {
    text9,
    place,
    basePdb,
    basePairs,
    designs,
    computation,
    review,
    submit,
    spanText,
    spanText2,
    spanText3,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-design-new-scaffold-pg-2 screen">
        <Nav />
        <Text9>{text9}</Text9>
        <Breadcrumbs>
          <Place>{place}</Place>
          <OverlapGroup>
            <Polygon5 src="/img/polygon-5-24@2x.svg" />
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
          <OverlapGroup>
            <Polygon5 src="/img/polygon-5-18@2x.svg" />
          </OverlapGroup>
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
          <Text8>
            <span className="chivo-light-charade-18px">{spanText}</span>
            <Span11>{spanText2}</Span11>
            <span className="chivo-light-charade-18px">{spanText3}</span>
          </Text8>
          <OverlapGroup6>
            <Upload1 src="/img/upload-1@2x.svg" />
          </OverlapGroup6>
        </FlexRow>
        <Group52>
          <Link to="/desktop-design-new-scaffold-pg-1">
            <Group50 src="/img/group-50-3@2x.svg" />
          </Link>
          <Link to="/desktop-design-new-scaffold-pg-3">
            <Group49 src="/img/group-49-2@2x.svg" />
          </Link>
        </Group52>
      </div>
    </div>
  );
}

const Text9 = styled.div`
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
  ${ChivoBoldCharade24px}
  min-height: 29px;
  margin-left: 12px;
  min-width: 110px;
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

const FlexRow = styled.div`
  margin-top: 83px;
  margin-left: 58px;
  display: flex;
  align-items: flex-start;
  min-width: 996px;
`;

const Text8 = styled.div`
  ${ChivoLightCharade18px}
  width: 494px;
  min-height: 126px;
  letter-spacing: 0;
`;

const Span11 = styled.span`
  ${ChivoLightCharade18px}
  text-decoration: underline;
`;

const OverlapGroup6 = styled.div`
  height: 415px;
  margin-left: 93px;
  display: flex;
  padding: 156px 153px;
  align-items: flex-start;
  min-width: 409px;
  border-radius: 10px;
  border: 2px solid var(--charade);
`;

const Upload1 = styled.img`
  width: 100px;
  height: 100px;
`;

const Group52 = styled.div`
  height: 170px;
  margin-top: 25px;
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

export default DesktopDesignNewScaffoldPg2;
