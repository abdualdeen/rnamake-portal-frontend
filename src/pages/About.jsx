import React from "react";
import "./About.css";
import helix from "../graphics/helix.svg";
import unl from "../images/unl-logo.png";
import nsf from "../images/nsf.png";
import osg from "../images/osg.png";
import path from "../images/paTh.png";
import xsede from "../images/xsede.png";

function About() {

  return (
    <div className="container-center-horizontal">
      <div className="desktop-about screen">
        <div className="flex-row">
          <div className="flex-column">
            <div className="top-tab">
              <div className="about">About</div>
              <img className="helix" src={helix} align-items="center" />
            </div>
            <p className="about-text">
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
            </p>
          </div>
          <div className="link-group">
            <div className="ack">Acknowledgements</div>
            <a href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=2030508" target="_blank" rel="noreferrer">
              <img className="path" src={path} />
            </a>
            <a href="https://nsf.gov/awardsearch/showAward?AWD_ID=1148698" target="_blank" rel="noreferrer">
              <img className="osg" src={osg} />
            </a>
            <a href="https://www.nsf.gov/" target="_blank" rel="noreferrer">
              <img className="nsf" src={nsf} />
            </a>
            <a href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=1053575" target="_blank" rel="noreferrer">
              <img className="xsede" src={xsede} />
            </a>
            <a href="https://www.unl.edu" target="_blank" rel="noreferrer">
              <img className="UNL" src={unl} />
            </a>
            <p className="ack-text">This work was completed utilizing the Holland Computing Center of the
             University of Nebraska, which receives support from the Nebraska Research Initiative.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
