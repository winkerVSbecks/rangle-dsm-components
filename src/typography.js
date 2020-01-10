import styled from 'styled-components';
import {
  compose,
  space,
  color,
  layout,
  flexbox,
  typography,
  border,
} from 'styled-system';
import {
  headingVariant,
  ctaVariant,
  linkVariant,
  contentVariant,
} from './typography-variants';

export const typographyFunctions = compose(
  space,
  color,
  layout,
  flexbox,
  typography,
  border,
);

export const Heading = styled.h1`
  ${typographyFunctions} ${headingVariant}
`;

export const CTA = styled.a`
  text-decoration: none;

  :hover {
    color: ${props => props.theme.colors.buttonTextHover01};
    text-decoration: underline;
  }
  ${typographyFunctions}
  ${ctaVariant}
`;

export const Link = styled.a`
  ${typographyFunctions}
  ${linkVariant}
`;

export const Text = styled.p`
  ${typographyFunctions}
  ${contentVariant}
`;
