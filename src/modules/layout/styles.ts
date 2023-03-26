import styled from '@emotion/styled';

export const Header = styled.span``;

export const Text = styled.span``;

export const ToggleDarkMode = styled.button`
  display: flex;
  align-items: center;
  border: none;
  color: ${({ theme }) => theme.palette.primary};
  font-weight: ${({ theme }) => theme.fontWeight.light};
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
  max-width: ${({ theme }) => theme.breakpoints.desktop};
  height: 80px;
  margin: auto;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  padding-inline: 16px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding-inline: 84px;
  }
`;

export const NavBarWrapper = styled.div`
  background-color: ${({ theme }) => theme.background.element};
  box-shadow: ${({ theme }) => theme.shadow.main};
`;

export const StyledLayout = styled.div`
  color: ${({ theme }) => theme.palette.primary};
  background-color: ${({ theme }) => theme.background.default};
`;
