import styled from 'styled-components';
import {
  color,
  ColorProps,
  compose,
  size,
  SizeProps,
  space,
  SpaceProps,
  width,
  WidthProps,
} from 'styled-system';

type BoxProps = ColorProps & SizeProps & SpaceProps & WidthProps;

export const Box = styled.div<BoxProps>(compose(color, size, space, width));
