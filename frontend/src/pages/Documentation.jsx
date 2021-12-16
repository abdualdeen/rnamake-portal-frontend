import React from 'react';
import styled from "styled-components";
import unl from "../images/unl-logo.png";
import nsf from "../images/nsf.png";
import osg from "../images/osg.png";
import paTh from "../images/paTh.png";
import xsede from "../images/xsede.png";
import corner_swoosh from '../graphics/corner_swoosh.svg';


function Documentation() {
    return (
        <div className="documentation">
            <div className="container">
                <References>Acknowledgements</References>
                <a href="https://opensciencegrid.org/" target="_blank" rel="noreferrer">
                    <Osg src={osg} />
                </a>
                <a href="https://path-cc.io/" target="_blank" rel="noreferrer">
                    <img src={paTh} />
                </a>
                <br />
                <a href="https://xsede.org/" target="_blank" rel="noreferrer">
                    <Xsede src={xsede} />
                </a>
                <a href="https://www.nsf.gov/" target="_blank" rel="noreferrer">
                    <Nsf src={nsf} />
                </a>
                <a href="https://www.hcc.unl.edu/" target="_blank" rel="noreferrer">
                    <UNL src={unl} />
                </a>
                <br />
                <br />
                <br />
                <p>
                    <a
                        className="App-link"
                        href="https://opensciencegrid.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Open Science Grid
                    </a>
                    <br />
                    <br />
                    <a
                        className="App-link"
                        href="https://path-cc.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Partnership to Advance Throughout Computing
                    </a>
                    <br />
                    <br />
                    <a
                        className="App-link"
                        href="https://www.xsede.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Extreme Science and Engineering Discovery Environment
                    </a>
                    <br />
                    <br />
                    <a
                        className="App-link"
                        href="https://www.nsf.gov/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        National Science Foundation
                    </a>
                    <br />
                    <br />
                    <a
                        className="App-link"
                        href="https://hcc.unl.edu/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Holland Computing Center of University of Nebraska
                    </a>
                    <br />
                    <br />
                    <a
                        className="App-link"
                        href="https://nebraska.edu/offices-policies/provosts-office/research/nebraska-research-initiative"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Nebraska Research Initiative
                    </a>
                </p>
            </div>
            <img src={corner_swoosh} alt="" width='100%'/>
        </div>
    );
}

const References = styled.div`
  font-family: 'Chivo';
  font-size: 48px;
  color: #4C5F94;
  position: absolute, left: 50%;
  top: 54px;
  left: 270px;
  text-align: center;
  letter-spacing: 0;
`;

const Osg = styled.img`
  width: 174px;
  height: 100px;
  margin-top: 35px;
  margin-left: 28.87px;
  object-fit: cover;
  cursor: pointer;
`;

const Nsf = styled.img`
  width: 100px;
  height: 100px;
  margin-top: 29px;
  margin-left: 28.97px;
  object-fit: cover;
  cursor: pointer;
`;

const Xsede = styled.img`
  width: 262px;
  height: 100px;
  margin-top: 44px;
  margin-left: 28.78px;
  object-fit: cover;
  cursor: pointer;
`;

const UNL = styled.img`
  width: 253px;
  height: 100px;
  margin-top: 46px;
  margin-left: 28.88px;
  object-fit: cover;
  cursor: pointer;
`;

export default Documentation;
