import { variant } from 'styled-system';

const defaultHeadingProps = {
  mt: 0,
  mb: 3,
  fontFamily: 'riforma',
  color: 'textHeading01',
};

export const headingVariant = variant({
  prop: 'type',
  variants: {
    extraLarge: {
      ...defaultHeadingProps,
      fontSize: [9, 9, 10, 11],
      fontWeight: 'light',
      lineHeight: 'solid',
    },
    large: {
      ...defaultHeadingProps,
      fontSize: [8, 8, 9, 10],
      fontWeight: 'light',
      lineHeight: ['m', 'l'],
    },
    medium: {
      ...defaultHeadingProps,
      fontSize: [4, 4, 6, 7],
      fontWeight: 'light',
      lineHeight: 'xl',
      letterSpacing: 's',
    },
    small: {
      ...defaultHeadingProps,
      fontSize: [2, 2, 2, 3],
      fontWeight: 'medium',
      lineHeight: 'xl',
      letterSpacing: 's',
    },
  },
});

const defaultCTAProps = {
  mt: 0,
  mb: 0,
  fontFamily: 'riforma',
  fontWeight: 'medium',
  color: 'buttonText01',
  lineHeight: 'xl',
  letterSpacing: 's',
};

export const ctaVariant = variant({
  prop: 'type',
  variants: {
    large: {
      ...defaultHeadingProps,
      fontSize: [3, 6, 7],
    },

    small: {
      ...defaultHeadingProps,
      fontSize: [2, 2, 2, 3],
    },
  },
});

export const linkVariant = variant({
  prop: 'type',
  variants: {
    list: {
      textDecoration: 'underline',
      ':hover': {
        color: 'buttonTextHover01',
      },
      fontFamily: 'riforma',
      fontWeight: 'regular',
      color: 'buttonText01',
      lineHeight: 'xl',
      letterSpacing: 's',
      color: 'textBody01',
      fontSize: [2, 2, 2, 3],
    },
    breadcrumb: {
      textDecoration: 'none',
      ':hover': {
        textDecoration: 'underline',
        color: 'buttonTextHover01',
      },
      fontFamily: 'riforma',
      fontWeight: 'medium',
      color: 'buttonText01',
      lineHeight: 'xl',
      letterSpacing: 'l',
      color: 'textSupport01',
      fontSize: 2,
    },
    captionLight: {
      textDecoration: 'none',
      color: 'textSupport01',
      ':hover': {
        textDecoration: 'underline',
      },
      type: 'dark',
      fontFamily: 'riforma',
      fontWeight: 'light',
      lineHeight: 'xl',
      letterSpacing: 'l',
      fontSize: [1, 1, 1, 2],
    },
    captionDark: {
      textDecoration: 'none',
      color: 'textSupport02',
      ':hover': {
        textDecoration: 'underline',
      },
      type: 'dark',
      fontFamily: 'riforma',
      fontWeight: 'light',
      lineHeight: 'xl',
      letterSpacing: 'l',
      fontSize: [1, 1, 1, 2],
    },
  },
});

export const contentVariant = variant({
  prop: 'type',
  variants: {
    body: {
      fontFamily: 'riforma',
      fontWeight: 'light',
      lineHeight: 'xl',
      letterSpacing: 's',
      color: 'textBody01',
      fontSize: [1, 1, 1, 2],
      mt: 0,
      mb: 3,
    },
    editorial: {
      fontFamily: 'riforma',
      fontWeight: 'light',
      lineHeight: 'l',
      letterSpacing: 's',
      color: 'textEditorial01',
      fontSize: [6, 6, 7, 8],
      mt: 0,
      mb: 3,
    },
    quote: {
      fontFamily: 'riforma',
      fontWeight: 'light',
      lineHeight: 'l',
      letterSpacing: 's',
      color: 'textEditorial01',
      fontSize: [6, 6, 7, 8],
      ml: 0,
      mt: 0,
      mb: 3,
    },
  },
});
