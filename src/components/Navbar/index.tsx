// imports
import { styled } from "styled-components";

// importing components
import Brand from "../Brand";

// navbar styles component
const StyledNavbar = styled.div`
  padding: 0.2rem 0.2rem;
  margin: 0.5rem 0.5rem;
`;

// navbar component
export default function Navbar() {
  return (
    <StyledNavbar>
      <Brand />
    </StyledNavbar>
  );
}
