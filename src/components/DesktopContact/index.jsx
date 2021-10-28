import React from "react";
import Navigation from "../Navigation";
import styled from "styled-components";
import {
  ChivoLightBlack18px,
  ChivoNormalCharade18px,
  ChivoBoldCharade24px,
  ChivoLightKashmirBlue64px,
} from "../../styledMixins";
import "./DesktopContact.css";

function DesktopContact(props) {
  const {
    contacts,
    text3,
    image2,
    image3,
    name,
    text4,
    dweitzelUnlEdu,
    hongfengYu,
    text5,
    hfyuUnlEdu,
    image1,
    name2,
    text7,
    spanText,
    spanText2,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-contact screen">
        <Navigation />
        <OverlapGroup4>
          <Contacts>{contacts}</Contacts>
          <Group12 src="/img/group-12-1@2x.svg" />
        </OverlapGroup4>
        <Text3>{text3}</Text3>
        <OverlapGroup5>
          <Image2 src={image2} />
          <Image3 src={image3} />
          <OverlapGroup3>
            <Group14>
              <OverlapGroup>
                <Name>{name}</Name>
                <Text4>{text4}</Text4>
              </OverlapGroup>
              <a href="mailto:dweitzel@unl.edu" target="_blank">
                <Dweitzelunledu>{dweitzelUnlEdu}</Dweitzelunledu>
              </a>
            </Group14>
            <Group15>
              <OverlapGroup>
                <Name>{hongfengYu}</Name>
                <Text4>{text5}</Text4>
              </OverlapGroup>
              <a href="mailto:hfyu@unl.edu" target="_blank">
                <Dweitzelunledu>{hfyuUnlEdu}</Dweitzelunledu>
              </a>
            </Group15>
            <Group13>
              <Image1 src={image1} />
              <OverlapGroup2>
                <Name>{name2}</Name>
                <Text7>{text7}</Text7>
              </OverlapGroup2>
              <Text6>
                <a href="mailto:jyesselm@unl.edu" target="_blank">
                  <span className="chivo-normal-charade-18px">{spanText}</span>
                </a>
                <span className="chivo-normal-charade-18px">{spanText2}</span>
              </Text6>
            </Group13>
            <Vector1 src="/img/vector-1@1x.svg" />
          </OverlapGroup3>
        </OverlapGroup5>
      </div>
    </div>
  );
}

const OverlapGroup4 = styled.div`
  width: 376px;
  height: 138px;
  position: relative;
  margin-top: 13px;
  margin-right: 44.19px;
`;

const Contacts = styled.div`
  ${ChivoLightKashmirBlue64px}
  position: absolute;
  top: 45px;
  left: 108px;
  text-align: center;
  letter-spacing: 0;
`;

const Group12 = styled.img`
  position: absolute;
  width: 121px;
  height: 138px;
  top: 0;
  left: 0;
`;

const Text3 = styled.div`
  ${ChivoNormalCharade18px}
  width: 732px;
  min-height: 121px;
  margin-top: 14px;
  text-align: center;
  letter-spacing: 0;
`;

const OverlapGroup5 = styled.div`
  width: 1440px;
  height: 683px;
  position: relative;
  margin-top: 94px;
  margin-left: 8px;
`;

const Image2 = styled.img`
  position: absolute;
  width: 200px;
  height: 200px;
  top: 0;
  left: 616px;
  object-fit: cover;
`;

const Image3 = styled.img`
  position: absolute;
  width: 200px;
  height: 200px;
  top: 0;
  left: 1037px;
  object-fit: cover;
`;

const OverlapGroup3 = styled.div`
  position: absolute;
  width: 1440px;
  height: 683px;
  top: 0;
  left: 0;
`;

const Group14 = styled.div`
  position: absolute;
  width: 295px;
  top: 224px;
  left: 571px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 160px;
`;

const OverlapGroup = styled.div`
  width: 289px;
  height: 93px;
  position: relative;
`;

const Name = styled.div`
  ${ChivoBoldCharade24px}
  position: absolute;
  width: 289px;
  top: 0;
  left: 0;
  text-align: center;
  letter-spacing: 0;
`;

const Text4 = styled.div`
  ${ChivoLightBlack18px}
  position: absolute;
  width: 280px;
  top: 30px;
  left: 9px;
  text-align: center;
  letter-spacing: 0;
`;

const Dweitzelunledu = styled.div`
  ${ChivoNormalCharade18px}
  width: 289px;
  min-height: 47px;
  margin-top: 20px;
  text-align: center;
  letter-spacing: 0;
  text-decoration: underline;
  cursor: pointer;
`;

const Group15 = styled.div`
  position: absolute;
  width: 295px;
  top: 224px;
  left: 992px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 160px;
`;

const Group13 = styled.div`
  position: absolute;
  width: 295px;
  top: 0;
  left: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 363px;
`;

const Image1 = styled.img`
  width: 200px;
  height: 200px;
  margin-right: 5px;
  object-fit: cover;
`;

const OverlapGroup2 = styled.div`
  width: 289px;
  height: 51px;
  position: relative;
  margin-top: 24px;
  margin-right: 6px;
`;

const Text7 = styled.div`
  ${ChivoLightBlack18px}
  position: absolute;
  top: 30px;
  left: 9px;
  text-align: center;
  letter-spacing: 0;
`;

const Text6 = styled.div`
  ${ChivoNormalCharade18px}
  width: 289px;
  min-height: 47px;
  margin-top: 41px;
  margin-right: 6px;
  text-align: center;
  letter-spacing: 0;
  text-decoration: underline;
`;

const Vector1 = styled.img`
  position: absolute;
  width: 1440px;
  height: 408px;
  top: 275px;
  left: 0;
`;

export default DesktopContact;
