import styled from '@emotion/styled';

export const Header = styled.span``;

export const Text = styled.span``;

export const ToggleDarkMode = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: ${({ theme }) => theme.palette.primary};
  font-weight: 600;
  background: none;
  gap: 6px;

  svg {
    width: 12px;
    height: 12px;
    fill: ${({ theme }) => theme.palette.primary};
  }
`;

export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  font-weight: bold;
  background-color: ${({ theme }) => theme.background.element};
  box-shadow: ${({ theme }) => theme.shadow.main};
  padding-inline: 16px;
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

export const Title = styled.p`
  font-weight: bold;
  margin-block-end: 24px;
`;

export const Information = styled.div`
  width: 100%;
  padding-block-start: 24px;
  padding-block-end: 32px;
  padding-inline: 24px;
`;

export const Flag = styled.img`
  width: 100%;
  height: auto;
  max-height: 200px;
`;

export const Card = styled.li`
  width: 264px;
  margin: auto;
  border-radius: 4px;
  overflow: hidden;
  list-style: none;
  background-color: ${({ theme }) => theme.background.element};
  box-shadow: ${({ theme }) => theme.shadow.main};
`;

export const CountryList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-block-start: 16px;
  padding-inline: 16px;
  gap: 40px;
`;

export const StyledCountries = styled.div`
  color: ${({ theme }) => theme.palette.primary};
  background-color: ${({ theme }) => theme.background.default};
`;
