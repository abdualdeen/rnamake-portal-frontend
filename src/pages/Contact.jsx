import React from "react";
import styled from "styled-components";
import "./Contact.css";
import helix from "../graphics/helix.svg";
import hongfeng from "../images/hongfeng.png";
import weitzel from "../images/weitzel.png";
import yesselman from "../images/yesselman.png";
import corner_swoosh from "../graphics/corner_swoosh.svg";

function Contact() {

  return (
    <div className="container-center-horizontal">
      <div className="desktop-contact screen">
        <div className="title-box">
          <div className="contacts-title">Contacts</div>
          <img className="helix" src={helix} />
        </div>
        <div className="body-text">Eos aut doloremque fugit iste officia sed quisquam delectus. Voluptatem quaerat consequatur 
          voluptatem corporis et aspernatur nam. Qui est corrupti quibusdam explicabo recusandae.
           Quo dolor ea quos doloribus corrupti vero. Dignissimos molestiae explicabo totam non neque. 
           Eum velit amet perferendis sed ipsa doloremque.</div>
        <OverlapGroup5>
          <img className="weitzel" src={weitzel} />
          <img className="hongfeng" src={hongfeng} />
          <OverlapGroup3>
            <Group14>
              <OverlapGroup>
                <div className="name">Derek Weitzel</div>
                <div className="role">Research Assistant Professor of Computer Science and Engineering</div>
              </OverlapGroup>
              <a href="mailto:dweitzel@unl.edu" target="_blank" rel="noreferrer">
                <div className="email">dweitzel@unl.edu</div>
              </a>
            </Group14>
            <Group15>
              <OverlapGroup>
                <div className="name">Hongfeng Yu</div>
                <div className="role">Associate Professor of Computer Science and Engineering</div>
              </OverlapGroup>
              <a href="mailto:hfyu@unl.edu" target="_blank" rel="noreferrer">
                <div className="email">hfyu@unl.edu</div>
              </a>
            </Group15>
            <Group13>
              <img className="yesselman" src={yesselman} />
              <OverlapGroup2>
                <div className="name">Joseph Yesselman</div>
                <div className="role">Assistant Professor of Chemistry</div>
              </OverlapGroup2>
              <div className="lab">
                <a href="mailto:jyesselm@unl.edu" target="_blank" rel="noreferrer">
                  <span className="chivo-normal-charade-18px">jyesselm@unl.edu</span>
                </a>
                <br />
                <span className="chivo-normal-charade-18px">Yesselman Lab Page</span>
              </div>
            </Group13>
          </OverlapGroup3>
        </OverlapGroup5>
      </div>
      <img className="swoosh" src={corner_swoosh} />
    </div>
  );
}

const OverlapGroup5 = styled.div`
  width: 1440px;
  height: 683px;
  position: relative;
  margin-top: 94px;
  margin-left: 8px;
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

const OverlapGroup2 = styled.div`
  width: 289px;
  height: 51px;
  position: relative;
  margin-top: 24px;
  margin-right: 6px;
`;

export default Contact;
