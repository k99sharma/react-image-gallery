// imports
import { styled } from "styled-components";

// importing types
import { BrandPropType } from "../../types/types";

// brand styled component
const StyledBrand = styled.div`
  padding: 0.5rem;
  display: flex;
  align-items: center;
`;

// brand text styled component
const StyledBrandText = styled.p`
  color: black;
  margin-left: 0.5rem;
`;

// brand component
export default function Brand({ width = 30, height = 30 }: BrandPropType) {
  return (
    <StyledBrand>
      <div>
        <img height={height} width={width} src="/assets/logo.png" alt="Logo" />
      </div>
      <div>
        <StyledBrandText>Pixel</StyledBrandText>
      </div>
    </StyledBrand>
  );
}
