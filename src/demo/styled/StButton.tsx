import styled, { css } from 'styled-components';

interface Props {
  primary?: boolean;
}

export const StButton = styled.button<Props>`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: deeppink;
  border: 2px solid white;

  ${(props) => {
    if (props.primary) {
      return css`
        background: blue;
        color: black;
      `;
    }
  }}
`;
