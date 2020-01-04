import styled from 'styled-components';
import {
  compose,
  space,
  color,
  layout,
  flexbox,
  border,
  position,
} from 'styled-system';

export const Box = styled.div(
  {
    boxSizing: 'border-box',
    minWidth: 0,
  },
  compose(space, color, layout, flexbox, border, position),
);
