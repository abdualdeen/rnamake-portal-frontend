import React from "react";
import styled from "styled-components";
import { ChivoLightKashmirBlue96px, ChivoNormalCharade24px, ChivoNormalCharade28px } from "../../styledMixins";
import "./DesktopWebHome.css";

function DesktopWebHome(props) {
  const { about, place, documentation, title, x3DDesignToolkit, text20 } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-web-home screen">
        <OverlapGroup1>
          <Navigation>
            <About>{about}</About>
            <Place>{place}</Place>
            <Documentation>{documentation}</Documentation>
          </Navigation>
          <LogInButton src="/img/log-in-button-1@2x.svg" />
          <RegisterButton src="/img/register-button-1@2x.svg" />
          <Swoop src="/img/swoop@1x.svg" />
          <OverlapGroup>
            <Title>{title}</Title>
            <X3DDesignToolkit>{x3DDesignToolkit}</X3DDesignToolkit>
          </OverlapGroup>
          <RNASVG src="/img/rna-svg@1x.svg" />
          <Text27>{text20}</Text27>
        </OverlapGroup1>
      </div>
    </div>
  );
}

const OverlapGroup1 = styled.div`
  width: 1441px;
  height: 1178px;
  position: relative;
  margin-left: -1px;
  margin-top: -31.88px;
`;

const Navigation = styled.div`
  ${ChivoNormalCharade24px}
  position: absolute;
  height: 88px;
  top: 81px;
  left: 77px;
  display: flex;
  align-items: flex-start;
  min-width: 732px;
`;

const About = styled.div`
  width: 115px;
  min-height: 88px;
  text-align: center;
  letter-spacing: 0;
`;

const Place = styled.div`
  width: 147px;
  min-height: 88px;
  margin-left: 132px;
  text-align: center;
  letter-spacing: 0;
`;

const Documentation = styled.div`
  width: 238px;
  min-height: 88px;
  margin-left: 100px;
  text-align: center;
  letter-spacing: 0;
`;

const LogInButton = styled.img`
  position: absolute;
  width: 233px;
  height: 67px;
  top: 595px;
  left: 176px;
`;

const RegisterButton = styled.img`
  position: absolute;
  width: 233px;
  height: 67px;
  top: 595px;
  left: 467px;
`;

const Swoop = styled.img`
  position: absolute;
  width: 1441px;
  height: 920px;
  top: 258px;
  left: 0;
`;

const OverlapGroup = styled.div`
  position: absolute;
  width: 574px;
  height: 130px;
  top: 199px;
  left: 150px;
`;

const Title = styled.h1`
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
  width: 657px;
  height: 862px;
  top: 0;
  left: 742px;
`;

const Text27 = styled.div`
  position: absolute;
  width: 573px;
  top: 367px;
  left: 151px;
  font-family: var(--font-family-chivo);
  font-weight: 400;
  color: var(--black);
  font-size: var(--font-size-m);
  text-align: center;
  letter-spacing: 0;
`;

export default DesktopWebHome;
