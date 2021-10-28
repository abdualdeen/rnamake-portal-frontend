import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav";
import styled from "styled-components";
import { ChivoBoldCharade24px, ChivoNormalCharade24px, ChivoLightKashmirBlue48px } from "../../styledMixins";
import "./DesktopDesignNewScaffoldPg7.css";

function DesktopDesignNewScaffoldPg7(props) {
  const { text25, place, basePdb, basePairs, designs, computation, review, submit, spanText, spanText2 } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-design-new-scaffold-pg-7 screen">
        <Nav />
        <Text25>{text25}</Text25>
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
        <Completed1 src="/img/completed-1@2x.svg" />
        <Link to="/desktop-portal-home">
          <Text26>
            <span className="chivo-normal-charade-24px">{spanText}</span>
            <Span12>{spanText2}</Span12>
          </Text26>
        </Link>
      </div>
    </div>
  );
}

const Text25 = styled.div`
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
  margin-left: 14px;
  display: flex;
  align-items: center;
  min-width: 946px;
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
  ${ChivoNormalCharade24px}
  min-height: 29px;
  margin-left: 13px;
  min-width: 81px;
  text-align: center;
  letter-spacing: 0;
`;

const Submit = styled.div`
  ${ChivoBoldCharade24px}
  min-height: 29px;
  margin-left: 13px;
  min-width: 81px;
  text-align: center;
  letter-spacing: 0;
`;

const Completed1 = styled.img`
  width: 171px;
  height: 170px;
  margin-top: 123px;
`;

const Text26 = styled.div`
  ${ChivoNormalCharade24px}
  width: 1130px;
  min-height: 87px;
  margin-top: 53px;
  text-align: center;
  letter-spacing: 0;
  cursor: pointer;
`;

const Span12 = styled.span`
  ${ChivoNormalCharade24px}
  text-decoration: underline;
`;

export default DesktopDesignNewScaffoldPg7;
