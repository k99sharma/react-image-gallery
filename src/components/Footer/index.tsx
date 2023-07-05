// imports
import { styled } from "styled-components";

// importing components
import SubText from "../SubText/SubText";

// footer styled component
const StyledFooter = styled.div`
  text-align: center;
  padding: 0.2rem;
`;

// footer component
export default function Footer() {
  return (
    <StyledFooter>
      <SubText>Copyright © {new Date().getFullYear()} Pixel</SubText>
    </StyledFooter>
  );
}
