import styled from '@emotion/styled';
import { Link as OriginalLink } from 'react-router-dom';

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
  aspect-ratio: 1.7;
  object-fit: cover;
`;

export const Card = styled.li`
  width: 264px;
  margin: auto;
  border-radius: 4px;
  overflow: hidden;
  list-style: none;
  background-color: ${({ theme }) => theme.background.element};
  box-shadow: ${({ theme }) => theme.shadow.main};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    height: 100%;
  }
`;

export const Link = styled(OriginalLink)`
  text-decoration: none;
  color: inherit;
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
  color: ${({ theme }) => theme.palette.primary};
  background-color: ${({ theme }) => theme.background.default};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding-inline: 84px;
  }
`;
