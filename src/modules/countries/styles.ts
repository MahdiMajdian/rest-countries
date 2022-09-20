import styled from '@emotion/styled';

import { theme } from '@styles/theme';

export const Header = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  font-weight: bold;
  background-color: ${theme.background.element};
  box-shadow: ${theme.shadow.main};
  padding-inline: 16px;
`;

export const Flag = styled.img`
  width: 100%;
  height: auto;
  max-height: 200px;
`;

export const Title = styled.p`
  font-weight: bold;
  margin-block-end: 24px;
`;

export const Item = styled.div`
  font-weight: bold;
  font-size: 12px;
  margin-block-end: 12px;
`;

export const Value = styled.span`
  font-weight: normal;
  font-size: 12px;
`;

export const Information = styled.div`
  width: 100%;

  padding-block-start: 24px;
  padding-block-end: 32px;
  padding-inline: 24px;
`;

export const Card = styled.li`
  width: 264px;
  margin: auto;
  border-radius: 4px;
  overflow: hidden;
  list-style: none;
  background-color: ${theme.background.element};
  box-shadow: ${theme.shadow.main};
`;

export const CountryList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-block-start: 16px;
  padding-inline: 16px;
  gap: 40px;
`;

export const StyledCountries = styled.div`
  background-color: ${theme.background.default};
  color: ${theme.palette.primary};
`;
