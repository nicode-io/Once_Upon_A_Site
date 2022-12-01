import styled, { css } from 'styled-components';
import { color, ColorProps, background, BackgroundProps } from 'styled-system';

interface Props {
  primary?: boolean;
}

type DosProps = Props & ColorProps & BackgroundProps;

export const StButton = styled.button<DosProps>`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: deeppink;
  border: 2px solid white;
  ${background}
  ${color}

  ${(props) => {
    if (props.primary) {
      return css`
        background: blue;
        color: black;
      `;
    }
  }}
`;
