import styled from '@emotion/styled';

export const SearchIcon = styled.div`
  display: flex;
  align-items: center;
  padding-inline: 32px;

  svg {
    width: 20px;
    height: 20px;
    fill: ${({ theme }) => theme.palette.secondary};
  }
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.palette.secondary};
  font-size: 16px;
  background: none;
`;

export const StyledSearchInput = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  border-radius: 4px;
  color: ${({ theme }) => theme.palette.secondary};
  background-color: ${({ theme }) => theme.background.element};
  box-shadow: ${({ theme }) => theme.shadow.main};
  margin-block: 24px;
  margin-inline: 16px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-grow: 0.2;
    margin: 0;
  }
`;
