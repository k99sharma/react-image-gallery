// imports
import { styled } from "styled-components";

// importing components
import Brand from "../Brand";

// navbar styles component
const StyledNavbar = styled.div`
  margin: 1rem 0 1rem 0;
`;

// navbar component
export default function Navbar() {
  return (
    <StyledNavbar>
      <Brand />
    </StyledNavbar>
  );
}
