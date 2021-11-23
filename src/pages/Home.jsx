import React from 'react';
import "./Home.css";
import { Button } from '../components/Button';
import homeSwoop from "../graphics/HomeSwoop.svg"

function Home() {

    return (
      <div className="desktop-web-home">
          <div className="text-group">
            <div className='rna-title'>RNAMake</div>
            <div className='toolkit'>3D Design Toolkit</div>
            <div className='main-text'>RNAMake is a toolkit for designing and optimizing RNA 3D structure. It allows the alignment between RNA motifs.
               These motif are small modular pieces of RNA that are believed to fold independently, thus attaching them together 
               with helix flanking both sides allows users of RNAMake to build large segments of RNA with a high success rate of 
               forming the predicted structure in vitro.<br /></div>
            <div className="main-text" align-text="justify"><br />Create an account or log in to access the application<br /></div>
            <div className="home-btns">
              <Button onClick={() => {}}
                          type="button"
                          buttonStyle="btn--primary--solid"
                          buttonSize="btn--large">Login</Button>
            </div>
          </div>
          <img className="swoop" src={homeSwoop}/>
      </div>
    );
}

export default Home;
