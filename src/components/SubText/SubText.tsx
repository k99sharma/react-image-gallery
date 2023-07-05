// imports
import { styled } from "styled-components";

// importing types
import { SubTextPropType } from "../../types/types";

// styled sub text component
const StyledSubText = styled.p`
  font-size: 14px;
`;

// sub text component
export default function SubText({ children }: SubTextPropType) {
  return <StyledSubText>{children}</StyledSubText>;
}
