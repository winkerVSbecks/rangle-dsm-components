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

export const buttonFunctions = compose(
  space,
  color,
  layout,
  flexbox,
  typography,
  border,
  layout,
);

export const PrimaryButton = styled.button`
  appearance: none;
  display: inline-block;
  text-align: center;
  line-height: inherit;
  text-decoration: none;
  border: none;

  color: ${props =>
    props.inverted
      ? props.theme.colors.buttonText01
      : props.theme.colors.buttonText02};

  background-color: ${props =>
    props.inverted
      ? props.theme.colors.navigation01
      : props.theme.colors.brand03};

  :hover {
    background-color: ${props => props.theme.colors.brand01};
    color: ${props => props.theme.colors.buttonText02};
  }

  :focus {
    background-color: ${props => props.theme.colors.brand01};
    outline: 4px double ${props => props.theme.colors.brand01};
    color: ${props => props.theme.colors.buttonText02};
  }

  :disabled {
    background-color: ${props => props.theme.colors.divider01};
    color: ${props => props.theme.colors.buttonText02};
  }

  ${buttonFunctions}
`;
PrimaryButton.defaultProps = {
  fontFamily: 'riforma',
  fontWeight: 'medium',
  lineHeight: 'xl',
  letterSpacing: 's',
  fontSize: [2, 2, 2, 3],
  px: 4,
  py: 20,
  width: ['100%', 'auto'],
};

export const SecondaryButton = styled.button`
  appearance: none;
  display: inline-block;
  text-align: center;
  line-height: inherit;
  text-decoration: none;
  border-width: 1px;
  border-style: solid;
  border-color: ${props =>
    props.inverted
      ? props.theme.colors.buttonText02
      : props.theme.colors.buttonText01};

  color: ${props =>
    props.inverted
      ? props.theme.colors.buttonText02
      : props.theme.colors.buttonText01};

  background-color: transparent;

  :hover {
    background-color: ${props => props.theme.colors.brand01};
    border-color: ${props => props.theme.colors.brand01};
    color: ${props => props.theme.colors.buttonText02};
  }

  :focus {
    background-color: ${props => props.theme.colors.brand01};
    border-color: ${props => props.theme.colors.brand01};
    outline: 4px double ${props => props.theme.colors.brand01};
    color: ${props => props.theme.colors.buttonText02};
  }

  :disabled {
    background-color: ${props => props.theme.colors.divider01};
    color: ${props => props.theme.colors.buttonText02};
    border-color: transparent;
  }

  ${buttonFunctions}
`;
SecondaryButton.defaultProps = {
  fontFamily: 'riforma',
  fontWeight: 'medium',
  lineHeight: 'xl',
  letterSpacing: 's',
  fontSize: [2, 2, 2, 3],
  px: 4,
  py: 20,
  width: ['100%', 'auto'],
};
