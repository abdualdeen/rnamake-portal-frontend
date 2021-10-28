import React from "react";
import styled from "styled-components";
import { ChivoBoldCharade24px, ChivoNormalCharade24px, ChivoBoldKashmirBlue36px } from "../../styledMixins";
import "./DesktopRegister.css";

function DesktopRegister(props) {
  const { place, selectInstitution, ssoSamlLoginForm, place2 } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-register screen">
        <OverlapGroup5>
          <OverlapGroup4>
            <Vector1 src="/img/vector-1@1x.svg" />
            <OverlapGroup3>
              <OverlapGroup1>
                <Place>{place}</Place>
                <OverlapGroup>
                  <SelectInstitution>{selectInstitution}</SelectInstitution>
                  <Polygon1 src="/img/polygon-1-3@2x.svg" />
                </OverlapGroup>
                <OverlapGroup2>
                  <SSOSAMLLoginForm>{ssoSamlLoginForm}</SSOSAMLLoginForm>
                </OverlapGroup2>
              </OverlapGroup1>
              <RegisterButton src="/img/register-button@2x.svg" />
            </OverlapGroup3>
          </OverlapGroup4>
          <Place1>{place2}</Place1>
        </OverlapGroup5>
      </div>
    </div>
  );
}

const OverlapGroup5 = styled.div`
  width: 1440px;
  height: 920px;
  position: relative;
  margin-top: 50px;
`;

const OverlapGroup4 = styled.div`
  position: absolute;
  width: 1440px;
  height: 876px;
  top: 44px;
  left: 0;
`;

const Vector1 = styled.img`
  position: absolute;
  width: 1440px;
  height: 408px;
  top: 468px;
  left: 0;
`;

const OverlapGroup3 = styled.div`
  position: absolute;
  width: 507px;
  height: 610px;
  top: 0;
  left: 466px;
`;

const OverlapGroup1 = styled.div`
  position: absolute;
  width: 507px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 38.3px 68.2px;
  align-items: flex-start;
  min-height: 610px;
  background-color: var(--mystic);
  box-shadow: 0px 4px 4px #00000040;
`;

const Place = styled.div`
  ${ChivoBoldKashmirBlue36px}
  width: 313px;
  min-height: 34px;
  align-self: center;
  margin-right: 0;
  text-align: center;
  letter-spacing: 0;
`;

const OverlapGroup = styled.div`
  height: 42px;
  margin-top: 42px;
  display: flex;
  padding: 11px 13.2px;
  align-items: center;
  min-width: 370px;
  background-image: url(/img/rectangle-17-3@2x.svg);
  background-size: 100% 100%;
`;

const SelectInstitution = styled.div`
  width: 144px;
  min-height: 20px;
  align-self: flex-end;
  font-family: var(--font-family-chivo);
  font-weight: 300;
  color: var(--lynch);
  font-size: var(--font-size-m);
  letter-spacing: 0;
`;

const Polygon1 = styled.img`
  width: 16px;
  height: 10px;
  margin-left: 171px;
  margin-top: 0.8px;
`;

const OverlapGroup2 = styled.div`
  height: 288px;
  margin-top: 42px;
  display: flex;
  padding: 72.2px 8.4px;
  align-items: flex-end;
  min-width: 370px;
  background-image: url(/img/rectangle-16@2x.svg);
  background-size: 100% 100%;
`;

const SSOSAMLLoginForm = styled.div`
  ${ChivoBoldCharade24px}
  width: 353px;
  min-height: 116px;
  text-align: center;
  letter-spacing: 0;
`;

const RegisterButton = styled.img`
  position: absolute;
  width: 233px;
  height: 67px;
  top: 516px;
  left: 137px;
`;

const Place1 = styled.div`
  ${ChivoNormalCharade24px}
  position: absolute;
  width: 115px;
  top: 0;
  left: 76px;
  text-align: center;
  letter-spacing: 0;
`;

export default DesktopRegister;
