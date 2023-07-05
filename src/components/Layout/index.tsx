// imports
import { styled } from "styled-components";

// importing types
import { LayoutPropType } from "../../types/types";

// importing components
import Navbar from "../Navbar";
import Footer from "../Footer";

// layout styled component
const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

// layout component
export default function Layout({ children }: LayoutPropType) {
  return (
    <StyledLayout>
      <Navbar />
      {children}
      <Footer />
    </StyledLayout>
  );
}
