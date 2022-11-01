import styled from '@emotion/styled';

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
  pointer-events: none;

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

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 15%;
    margin: 0;
  }
`;

export const MenuBar = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-block-start: 48px;
  }
`;

export const ErrorText = styled.p`
  color: ${({ theme }) => theme.palette.error};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-transform: capitalize;
`;

export const ReloadButton = styled.button`
  display: flex;
  align-items: center;
  width: fit-content;
  border: none;
  border-radius: 4px;
  color: ${({ theme }) => theme.palette.primary};
  background-color: ${({ theme }) => theme.background.element};
  box-shadow: ${({ theme }) => theme.shadow.main};
  gap: 6px;
  margin-block: 24px;
  padding-block: 8px;
  padding-inline: 16px;

  svg {
    width: 24px;
    height: 24px;
    fill: ${({ theme }) => theme.palette.primary};
  }
`;

export const ReloadBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoadingText = styled.p`
  color: ${({ theme }) => theme.palette.primary};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-transform: capitalize;
`;

export const CountryList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-block-start: 16px;
  padding-inline: 16px;
  gap: 40px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0;
    gap: 66px;
    margin-block-start: 48px;
  }
`;

export const StyledCountries = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${({ theme }) => theme.breakpoints.desktop};
  margin: auto;
  margin-block-start: 16px;
  color: ${({ theme }) => theme.palette.primary};
  background-color: ${({ theme }) => theme.background.default};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding-inline: 84px;
  }
`;
