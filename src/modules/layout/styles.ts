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
  height: 80px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  background-color: ${({ theme }) => theme.background.element};
  box-shadow: ${({ theme }) => theme.shadow.main};
  padding-inline: 16px;
`;

export const StyledLayout = styled.div`
  color: ${({ theme }) => theme.palette.primary};
  background-color: ${({ theme }) => theme.background.default};
`;
