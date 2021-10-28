import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ChivoBoldCharade24px } from "../../styledMixins";
import "./ContactOverlay.css";

function ContactOverlay(props) {
  const { place } = props;

  return (
    <div className="container-center-horizontal">
      <div className="contact-overlay screen">
        <Link to="/desktop-contact">
          <ContactTab>
            <OverlapGroup>
              <Place>{place}</Place>
              <Vector3 src="/img/vector-3-3@2x.svg" />
            </OverlapGroup>
          </ContactTab>
        </Link>
      </div>
    </div>
  );
}

const ContactTab = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 150px;
  cursor: pointer;
`;

const OverlapGroup = styled.div`
  width: 148px;
  height: 88px;
  position: relative;
`;

const Place = styled.div`
  ${ChivoBoldCharade24px}
  position: absolute;
  width: 147px;
  top: 0;
  left: 0;
  text-align: center;
  letter-spacing: 0;
`;

const Vector3 = styled.img`
  position: absolute;
  width: 148px;
  height: 4px;
  top: 54px;
  left: 0;
`;

export default ContactOverlay;
