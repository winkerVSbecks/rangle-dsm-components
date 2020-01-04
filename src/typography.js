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

export const typographyFunctions = compose(
  space,
  color,
  layout,
  flexbox,
  typography,
  border,
);

const defaultHeadingProps = {
  mt: 0,
  mb: 3,
  fontFamily: 'riforma',
  color: 'textHeading01',
};

export const ExtraLargeHeading = styled.h1(typographyFunctions);
ExtraLargeHeading.defaultProps = {
  ...defaultHeadingProps,
  fontSize: [9, 9, 10, 11],
  fontWeight: 'light',
  lineHeight: 'solid',
};

export const LargeHeading = styled.h1(typographyFunctions);
LargeHeading.defaultProps = {
  ...defaultHeadingProps,
  fontSize: [8, 8, 9, 10],
  fontWeight: 'light',
  lineHeight: ['m', 'l'],
};

export const MediumHeading = styled.h1(typographyFunctions);
MediumHeading.defaultProps = {
  ...defaultHeadingProps,
  fontSize: [4, 4, 6, 7],
  fontWeight: 'light',
  lineHeight: 'xl',
  letterSpacing: 's',
};

export const SmallHeading = styled.h1(typographyFunctions);
SmallHeading.defaultProps = {
  ...defaultHeadingProps,
  fontSize: [2, 2, 2, 3],
  fontWeight: 'medium',
  lineHeight: 'xl',
  letterSpacing: 's',
};

const defaultCTAProps = {
  mt: 0,
  mb: 0,
  fontFamily: 'riforma',
  fontWeight: 'medium',
  color: 'buttonText01',
  lineHeight: 'xl',
  letterSpacing: 's',
};

export const CTA = styled.a`
  text-decoration: none;

  :hover {
    color: ${props => props.theme.colors.buttonTextHover01};
    text-decoration: underline;
  }
  ${typographyFunctions}
`;

export const LargeCTA = styled(CTA)``;
LargeCTA.defaultProps = {
  ...defaultHeadingProps,
  fontSize: [3, 6, 7],
};

export const SmallCTA = styled(CTA)``;
SmallCTA.defaultProps = {
  ...defaultHeadingProps,
  fontSize: [2, 2, 2, 3],
};

export const ListLink = styled.a`
  text-decoration: underline;

  :hover {
    color: ${props => props.theme.colors.buttonTextHover01};
  }
  ${typographyFunctions}
`;
ListLink.defaultProps = {
  fontFamily: 'riforma',
  fontWeight: 'regular',
  color: 'buttonText01',
  lineHeight: 'xl',
  letterSpacing: 's',
  color: 'textBody01',
  fontSize: [2, 2, 2, 3],
};

export const Breadcrumb = styled.a`
  text-decoration: none;

  :hover {
    text-decoration: underline;
    color: ${props => props.theme.colors.buttonTextHover01};
  }
  ${typographyFunctions}
`;
Breadcrumb.defaultProps = {
  fontFamily: 'riforma',
  fontWeight: 'medium',
  color: 'buttonText01',
  lineHeight: 'xl',
  letterSpacing: 'l',
  color: 'textSupport01',
  fontSize: 2,
};

export const Caption = styled.a`
  text-decoration: none;
  color: ${props =>
    props.type === 'dark'
      ? props.theme.colors.textSupport01
      : props.theme.colors.textSupport02};

  :hover {
    text-decoration: underline;
  }
  ${typographyFunctions}
`;
Caption.defaultProps = {
  type: 'dark',
  fontFamily: 'riforma',
  fontWeight: 'light',
  lineHeight: 'xl',
  letterSpacing: 'l',
  fontSize: [1, 1, 1, 2],
};

export const Body = styled.p(typographyFunctions);
Body.defaultProps = {
  fontFamily: 'riforma',
  fontWeight: 'light',
  lineHeight: 'xl',
  letterSpacing: 's',
  color: 'textBody01',
  fontSize: [1, 1, 1, 2],
  mt: 0,
  mb: 3,
};

export const EditorialText = styled.p(typographyFunctions);
EditorialText.defaultProps = {
  fontFamily: 'riforma',
  fontWeight: 'light',
  lineHeight: 'l',
  letterSpacing: 's',
  color: 'textEditorial01',
  fontSize: [6, 6, 7, 8],
  mt: 0,
  mb: 3,
};

export const QuoteText = styled.blockquote(typographyFunctions);
QuoteText.defaultProps = {
  fontFamily: 'riforma',
  fontWeight: 'light',
  lineHeight: 'l',
  letterSpacing: 's',
  color: 'textEditorial01',
  fontSize: [6, 6, 7, 8],
  ml: 0,
  mt: 0,
  mb: 3,
};
