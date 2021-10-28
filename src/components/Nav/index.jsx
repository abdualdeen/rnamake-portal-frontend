import React from "react";
import styled from "styled-components";
import { ChivoNormalCharade24px } from "../../styledMixins";


function Nav(props) {
  const { className } = props;

  return (
    <Nav1 className={`nav ${className || ""}`}>
      <Place className="place-11">Home</Place>
      <Place1 className="place-12">Portal</Place1>
    </Nav1>
  );
}

const Nav1 = styled.div`
  ${ChivoNormalCharade24px}
  height: 115px;
  align-self: flex-start;
  display: flex;
  padding: 6.6px 15.4px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 347px;
  background-color: var(--wild-sand);

  &.nav.nav-2 {
    align-self: unset;
  }
`;

const Place = styled.div`
  width: 115px;
  min-height: 69px;
  margin-bottom: 0.31px;
  text-align: center;
  letter-spacing: 0;
`;

const Place1 = styled.div`
  width: 115px;
  min-height: 69px;
  margin-left: 26px;
  text-align: center;
  letter-spacing: 0;
`;

export default Nav;
