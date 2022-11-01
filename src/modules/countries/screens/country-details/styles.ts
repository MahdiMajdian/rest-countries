import styled from '@emotion/styled';

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  width: fit-content;
  border: none;
  border-radius: 4px;
  color: ${({ theme }) => theme.palette.primary};
  background-color: ${({ theme }) => theme.background.element};
  box-shadow: ${({ theme }) => theme.shadow.main};
  gap: 6px;
  margin-block: 32px;
  padding-block: 4px;
  padding-inline: 24px;

  svg {
    width: 24px;
    height: 24px;
    fill: ${({ theme }) => theme.palette.primary};
  }
`;

export const Flag = styled.div`
  img {
    width: 100%;
    aspect-ratio: 1.7;
    object-fit: cover;
    margin-block: 24px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 100%;
  }
`;

export const Name = styled.p`
  margin-block: 24px;
  font-size: 24px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const Value = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.light};
`;

export const Item = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  margin-block-end: 16px;
`;

export const GroupTitle = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: 18px;
  margin-block-end: 16px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 16px;
    white-space: nowrap;
  }
`;

export const CountryName = styled.p`
  overflow: hidden;
  color: ${({ theme }) => theme.palette.primary};
  font-size: 12px;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const BorderCountry = styled.li`
  border-radius: 4px;
  background-color: ${({ theme }) => theme.background.element};
  box-shadow: ${({ theme }) => theme.shadow.main};
  padding-block: 8px;
  padding-inline: 24px;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const BorderCountryList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 8px;
  list-style: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const BorderCountries = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: flex;
    gap: 16px;
  }
`;

export const Group = styled.div`
  margin-block-end: 32px;
`;

export const Statics = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Information = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 100%;
  }
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row;
    gap: 96px;
  }
`;

export const StyledCountryDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline: 24px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding-inline: 96px;
  }
`;
