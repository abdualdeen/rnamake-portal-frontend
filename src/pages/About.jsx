import React from "react";
import styled from "styled-components";
import "./About.css";
import helix from "../graphics/helix.svg";

function About() {

  return (
    <div className="desktop-about screen">
        <div className="container">
          <div style = {{
            position: 'absolute', left: '27.5%'
          }}>
        {/* <FlexRow>
          <FlexCol> */}
            <TopTab>
              <AboutTheToolkit>About</AboutTheToolkit>
              <Helix src={helix} align-items="center" />
            </TopTab>
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
          {/* </FlexCol>
        </FlexRow> */}
        </div>
      </div>
    </div>
  );
}

const TopTab = styled.div`
  width: 609px;
  height: 138px;
  position: relative;
  margin-left: 22.81px;
  text-align: center;
  align-items: center;
`;

const AboutTheToolkit = styled.div`
  font-family: 'Chivo';
  font-size: 48px;
  color: #4C5F94;
  position: absolute;
  top: 54px;
  left: 270px;
  text-align: center;
  letter-spacing: 0;
`;

const Helix = styled.img`
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
  font-family: 'Chivo';
  font-weight: 400;
  color: var(--charade);
  font-size: var(--font-size-m);
  letter-spacing: 0;
`;

export default About;
