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
  padding: 20px 32px;
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
  }

  :disabled {
    background-color: ${props => props.theme.colors.divider01};
  }

  ${buttonFunctions}
`;
PrimaryButton.defaultProps = {
  fontFamily: 'riforma',
  fontWeight: 'medium',
  lineHeight: 'solid',
  letterSpacing: 's',
  fontSize: [2, 2, 2, 3],
  width: ['100%', 'auto'],
};

export const SecondaryButton = styled.button`
  appearance: none;
  display: inline-block;
  text-align: center;
  line-height: inherit;
  text-decoration: none;
  padding: 20px 32px;
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
  }

  :disabled {
    background-color: ${props => props.theme.colors.divider01};
  }

  ${buttonFunctions}
`;
SecondaryButton.defaultProps = {
  fontFamily: 'riforma',
  fontWeight: 'medium',
  lineHeight: 'solid',
  letterSpacing: 's',
  fontSize: [2, 2, 2, 3],
  width: ['100%', 'auto'],
};
