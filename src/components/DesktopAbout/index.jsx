import React from "react";
import Navigation from "../Navigation";
import styled from "styled-components";
import { ChivoLightKashmirBlue64px, ChivoBoldKashmirBlue36px } from "../../styledMixins";
import "./DesktopAbout.css";

function DesktopAbout(props) {
  const {
    aboutTheToolkit,
    acknowledgements,
    partnership_To_Advance_Throughput_C,
    osg_OpaqueRemovebgPreview1,
    nsf1,
    xsedeFullColor1,
    universityOfNebraskaLincolnUnl1,
    text29,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-about screen">
        <Navigation />
        <FlexRow>
          <FlexCol>
            <OverlapGroup1>
              <AboutTheToolkit>{aboutTheToolkit}</AboutTheToolkit>
              <Group12 src="/img/group-12@2x.svg" />
            </OverlapGroup1>
            <Text28>
              RNAMake is a toolkit for designing and optimizing RNA 3D structure. It allows the alignment between RNA
              motifs. These motif are small modular peices of RNA that are believed to fold independently, thus
              attaching them together with helix flanking both sides allows users of RNAMake to build large segments of
              RNA with a high success rate of forming the predicted structure in vitro.
              <br />
              <br />
              How does RNAMake generate new RNA segments?
              <br />
              <br />
              RNAMake leverages an extensive motif library and pathfinding algorithms to automate the assembly of RNA 3D
              motifs in design. Specifically, RNAMake is capable of generating RNA segments in 3D composed of continuous
              chains of RNA motifs that that twist and translate between any two desired helical endpoints
              <br />
              <br />
              Example Header 2<br />
              <br />
              Eos aut doloremque fugit iste officia sed quisquam delectus. Voluptatem quaerat consequatur voluptatem
              corporis et aspernatur nam. Qui est corrupti quibusdam explicabo recusandae. Quo dolor ea quos doloribus
              corrupti vero. Dignissimos molestiae explicabo totam non neque. Eum velit amet perferendis sed ipsa
              doloremque.
              <br />
              <br />
              Et aperiam labore laborum debitis qui est. Consequatur quos aut totam non. Dolorem provident voluptas
              temporibus. Perspiciatis explicabo qui asperiores ipsa aut et velit est. Omnis alias sunt doloremque
              occaecati totam distinctio cum. Vitae ut corporis sit consequatur cum odit.
              <br />
              <br />
              Quod provident sunt neque accusamus eum et deleniti consequatur. Molestiae et officia saepe esse. Aliquid
              qui officia consequuntur voluptatem nam. Facilis tempore fugiat earum quasi et inventore. Ut commodi vero
              et ea. Molestiae et illo eum perferendis minus ut et.
              <br />
              <br />
              Ab aut voluptas eum. Facilis voluptatibus eum nulla reprehenderit est odit aut qui. Enim odit temporibus
              blanditiis esse.
              <br />
              <br />
              Ut assumenda magnam id unde id dolor. Reprehenderit qui eum vel non eum sed. Eius in provident ut nam
              voluptas. Laborum ipsum fuga quas corrupti. Est consequuntur eos fugiat et laboriosam.
            </Text28>
          </FlexCol>
          <OverlapGroup>
            <Acknowledgements>{acknowledgements}</Acknowledgements>
            <a href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=2030508" target="_blank">
              <PartnershipToAdvanceThroughputCompu src={partnership_To_Advance_Throughput_C} />
            </a>
            <a href="https://nsf.gov/awardsearch/showAward?AWD_ID=1148698" target="_blank">
              <OsgOpaqueRemovebgPreview1 src={osg_OpaqueRemovebgPreview1} />
            </a>
            <a href="https://www.nsf.gov/" target="_blank">
              <Nsf1 src={nsf1} />
            </a>
            <a href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=1053575" target="_blank">
              <XsedeFullColor1 src={xsedeFullColor1} />
            </a>
            <a href="unl.edu" target="_blank">
              <UniversityOfNebraskaLincolnUnl1 src={universityOfNebraskaLincolnUnl1} />
            </a>
            <Text29>{text29}</Text29>
          </OverlapGroup>
        </FlexRow>
      </div>
    </div>
  );
}

const FlexRow = styled.div`
  height: 1063px;
  display: flex;
  align-items: flex-start;
  min-width: 1364px;
`;

const FlexCol = styled.div`
  width: 732px;
  margin-top: 3.66px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 972px;
`;

const OverlapGroup1 = styled.div`
  width: 609px;
  height: 138px;
  position: relative;
  margin-left: 22.81px;
`;

const AboutTheToolkit = styled.div`
  ${ChivoLightKashmirBlue64px}
  position: absolute;
  top: 54px;
  left: 109px;
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

const Text28 = styled.div`
  width: 732px;
  min-height: 811px;
  margin-top: 23px;
  font-family: var(--font-family-chivo);
  font-weight: 400;
  color: var(--charade);
  font-size: var(--font-size-m);
  letter-spacing: 0;
`;

const OverlapGroup = styled.div`
  width: 548px;
  margin-left: 84px;
  display: flex;
  flex-direction: column;
  padding: 56px 59px;
  align-items: flex-start;
  min-height: 1063px;
  background-color: var(--mystic);
`;

const Acknowledgements = styled.div`
  ${ChivoBoldKashmirBlue36px}
  width: 392px;
  min-height: 43px;
  align-self: flex-end;
  letter-spacing: 0;
`;

const PartnershipToAdvanceThroughputCompu = styled.img`
  width: 234px;
  height: 100px;
  margin-top: 70px;
  margin-left: 37.94px;
  object-fit: cover;
  cursor: pointer;
`;

const OsgOpaqueRemovebgPreview1 = styled.img`
  width: 174px;
  height: 100px;
  margin-top: 35px;
  margin-left: 28.87px;
  object-fit: cover;
  cursor: pointer;
`;

const Nsf1 = styled.img`
  width: 100px;
  height: 100px;
  margin-top: 29px;
  margin-left: 28.97px;
  object-fit: cover;
  cursor: pointer;
`;

const XsedeFullColor1 = styled.img`
  width: 262px;
  height: 100px;
  margin-top: 44px;
  margin-left: 28.78px;
  object-fit: cover;
  cursor: pointer;
`;

const UniversityOfNebraskaLincolnUnl1 = styled.img`
  width: 253px;
  height: 100px;
  margin-top: 46px;
  margin-left: 28.88px;
  object-fit: cover;
  cursor: pointer;
`;

const Text29 = styled.p`
  width: 401px;
  min-height: 75px;
  align-self: flex-end;
  margin-top: 62px;
  font-family: var(--font-family-chivo);
  font-weight: 700;
  color: var(--charade);
  font-size: var(--font-size-xs);
  letter-spacing: 0;
`;

export default DesktopAbout;
