import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  width: 100%;
`;

export const HeaderWrap = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLogo = styled(Link)``;

export const HeaderLogoImg = styled.img``;

export const HeaderMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderItem = styled.li`
  list-style: none;
  margin: 0 12px;

  :last-child {
    margin-right: 0;
  }
`;

export const HeaderLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;
