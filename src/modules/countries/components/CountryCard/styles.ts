import styled from '@emotion/styled';
import { Link as OriginalLink } from 'react-router-dom';

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

export const StyledCountryCard = styled.div``;
