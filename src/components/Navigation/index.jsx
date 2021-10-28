import React from "react";
import styled from "styled-components";
import { ChivoNormalCharade24px } from "../../styledMixins";


function Navigation() {
  return (
    <Navigation1>
      <About>About</About>
      <Place>Contact</Place>
      <Documentation>Documentation</Documentation>
      <Place1>Home</Place1>
    </Navigation1>
  );
}

const Navigation1 = styled.div`
  ${ChivoNormalCharade24px}
  height: 137px;
  display: flex;
  padding: 0 72.4px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 1440px;
  background-color: var(--wild-sand);
`;

const About = styled.div`
  width: 115px;
  min-height: 88px;
  text-align: center;
  letter-spacing: 0;
`;

const Place = styled.div`
  width: 147px;
  min-height: 88px;
  margin-left: 132px;
  text-align: center;
  letter-spacing: 0;
`;

const Documentation = styled.div`
  width: 238px;
  min-height: 88px;
  margin-left: 100px;
  text-align: center;
  letter-spacing: 0;
`;

const Place1 = styled.div`
  width: 115px;
  min-height: 88px;
  margin-left: 445px;
  text-align: center;
  letter-spacing: 0;
`;

const Navigation2 = styled.div`
  ${ChivoNormalCharade24px}
  height: 137px;
  display: flex;
  padding: 0 72.4px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 1440px;
  background-color: var(--wild-sand);
`;

const About1 = styled.div`
  width: 115px;
  min-height: 88px;
  text-align: center;
  letter-spacing: 0;
`;

const Place2 = styled.div`
  width: 147px;
  min-height: 88px;
  margin-left: 132px;
  text-align: center;
  letter-spacing: 0;
`;

const Documentation1 = styled.div`
  width: 238px;
  min-height: 88px;
  margin-left: 100px;
  text-align: center;
  letter-spacing: 0;
`;

const Place3 = styled.div`
  width: 115px;
  min-height: 88px;
  margin-left: 445px;
  text-align: center;
  letter-spacing: 0;
`;

export default Navigation;
