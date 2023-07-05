// imports
import { styled } from "styled-components";

// importing types
import { TextPropType } from "../../types/types";

// text styled component
const StyledText = styled.p``;

// text component
export default function Text({ children }: TextPropType) {
  return <StyledText>{children}</StyledText>;
}
