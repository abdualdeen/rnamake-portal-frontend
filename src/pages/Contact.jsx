import React from "react";
import styled from "styled-components";
// import "./Contact.css";
import helix from "../graphics/helix.svg";
import hongfeng from "../images/hongfeng.png";
import weitzel from "../images/weitzel.png";
import yesselman from "../images/yesselman.png";
import corner_swoosh from "../graphics/corner_swoosh.svg";

function Contact() {

  return (
    <div className="contact">
      <div className="container">
        <div className="title-box">
          <Contacts>
            <img className="helix" src={helix}/>
            Contacts
          </Contacts>
        </div>
        <div className="body-text">Eos aut doloremque fugit iste officia sed quisquam delectus. Voluptatem quaerat consequatur 
          voluptatem corporis et aspernatur nam. Qui est corrupti quibusdam explicabo recusandae.
           Quo dolor ea quos doloribus corrupti vero. Dignissimos molestiae explicabo totam non neque. 
           Eum velit amet perferendis sed ipsa doloremque.</div>
        {/* <OverlapGroup5>
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
      </div> */}

        <div style = {{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
          <div>
            <Yesselman src = {yesselman}/>
            <br/>
            <a href='jyesselm@unl.edu' target='blank' rel='noreferrer'>
              jyesselm@unl.edu
            </a>
            <br/>
            Assistant Professor of Chemistry
          </div>
        
          <div>
            <Weitzel src = {weitzel}/>
            <br/>
            <a href='dweitzel@unl.edu' target='blank' rel='noreferrer'>
              dweitzel@unl.edu
            </a>
            <br/>
            Research Assistant Professor of
            <br/>
            Computer Science and Engineering
          </div>

          <div>
            <Hongfeng src = {hongfeng}/>
            <br/>
            <a href='hfyum@unl.edu' target='blank' rel='noreferrer'>
              hfyu@unl.edu
            </a>
            <br/>
            Associate Professor of Computer
            <br/>
            Science and Engineering
          </div>
        </div>
        </div>
      <img src={corner_swoosh} alt="" width='100%'/>
    </div>
  );
}

{/* const OverlapGroup5 = styled.div`
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
`; */}

{/* const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`; */}

const Yesselman = styled.img`
  width: 220px;
  height: 220px;
  margin-top: 12.5px;
  margin-left: 50px;
  margin-right: 50px;
  object-fit: cover;
  cursor: pointer;
`;

const Weitzel = styled.img`
  width: 220px;
  height: 220px;
  margin-top: 35px;
  margin-left: 50px;
  margin-right: 50px;
  object-fit: cover;
  cursor: pointer;
`;

const Hongfeng = styled.img`
  width: 220px;
  height: 220px;
  margin-top: 35px;
  margin-left: 50px;
  margin-right: 50px;
  object-fit: cover;
  cursor: pointer;
`;

const Contacts = styled.div`
  font-family: 'Chivo';
  font-size: 48px;
  color: #4C5F94;
  position: absolute, left: 50%;
  top: 54px;
  left: 270px;
  text-align: center;
  letter-spacing: 0;
`;

export default Contact;
