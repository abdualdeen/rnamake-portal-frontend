import React from 'react';
import styled from "styled-components";
import "./Home.css";
import homeswoop from "../graphics/HomeSwoop.svg"
import login from "../graphics/LogInButton.svg";
import register from "../graphics/RegisterButton.svg";

function Home() {

    return (
      <div className="desktop-web-home screen">
          <div margin="auto" text-align="center">
            <text className='rna-title'>RNAMake</text>
            <text className='toolkit'>3D Design Toolkit</text>
            <text className='main-text'>RNAMake is a toolkit for designing and optimizing RNA 3D structure. It allows the alignment between RNA motifs.
               These motif are small modular pieces of RNA that are believed to fold independently, thus attaching them together 
               with helix flanking both sides allows users of RNAMake to build large segments of RNA with a high success rate of 
               forming the predicted structure in vitro.<br /> <br />Create an account or log in to access the application</text>
          </div>
          <div>
            <LogInButton src={login} />
            <RegisterButton src={register} />
          </div>
          <img className="swoop" src={homeswoop} />
      </div>
    );
}

const LogInButton = styled.img`
  position: absolute;
  width: 233px;
  height: 67px;
  top: 650px;
  left: 176px;
`;

const RegisterButton = styled.img`
  position: absolute;
  width: 233px;
  height: 67px;
  top: 650px;
  left: 467px;
`;

export default Home;
