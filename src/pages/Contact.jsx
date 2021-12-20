import React from "react";
import styled from "styled-components";
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
            <br/>
            <a href='dweitzel@unl.edu' target='blank' rel='noreferrer'>
              dweitzel@unl.edu
            </a>
            <br/>
            <br/>
            Research Assistant Professor of
            <br/>
            Computer Science and Engineering
          </div>

          <div>
            <Hongfeng src = {hongfeng}/>
            <br/>
            <br/>
            <a href='hfyum@unl.edu' target='blank' rel='noreferrer'>
              hfyu@unl.edu
            </a>
            <br/>
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
