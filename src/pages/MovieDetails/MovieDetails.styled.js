import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Img = styled.img`
  width: 300px;
  margin: ${p => p.theme.space[4]}px auto;
`;

export const AdditionalLink = styled(NavLink)`
  color: ${p => p.theme.colors.darkmagenta};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
  :first-child {
    margin-right: ${p => p.theme.space[4]}px;
  }
  :hover,
  :focus {
    color: ${p => p.theme.colors.accent};
  }
`;

export const BackLink = styled(NavLink)`
  margin-bottom: ${p => p.theme.space[5]};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.darkmagenta};
  :hover,
  :focus {
    color: ${p => p.theme.colors.accent};
  }
`;
