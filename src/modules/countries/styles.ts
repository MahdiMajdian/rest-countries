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

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  border-radius: 4px;
  color: ${({ theme }) => theme.palette.secondary};
  background-color: ${({ theme }) => theme.background.element};
  box-shadow: ${({ theme }) => theme.shadow.main};
  margin-block: 24px;
  margin-inline: 16px;
`;

export const Option = styled.option``;

export const SelectBox = styled.select`
  width: 100%;
  border: none;
  border-radius: 4px;
  outline: none;
  color: ${({ theme }) => theme.palette.primary};
  font-size: 16px;
  font-family: inherit;
  background-color: ${({ theme }) => theme.background.element};
  box-shadow: ${({ theme }) => theme.shadow.main};
  appearance: none;
  padding-inline: 16px;
`;

export const Icon = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  padding-inline-end: 16px;

  svg {
    width: 24px;
    height: 24px;
    fill: ${({ theme }) => theme.palette.primary};
  }
`;

export const FilterByRegion = styled.div`
  display: flex;
  position: relative;
  width: 55%;
  height: 48px;
  margin-block: 16px;
  margin-inline: 16px;
`;

export const Item = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: 12px;
  margin-block-end: 12px;
`;

export const Value = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-size: 12px;
`;

export const Title = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
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
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.palette.primary};
  background-color: ${({ theme }) => theme.background.default};
`;
