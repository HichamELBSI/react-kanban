import styled from "styled-components";

const Padded = styled.div`
  padding: ${props => props.theme.sizes[props.size]};
`;

export default Padded;
