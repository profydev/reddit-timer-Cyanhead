import React from 'react';
import {
  HeaderContainer,
  HeaderWrap,
  HeaderLogo,
  HeaderLogoImg,
  HeaderMenu,
  HeaderItem,
  HeaderLink,
} from './HeaderElements';
import logo from '../../assets/logo.svg';

function Header() {
  return (
    <header>
      <HeaderContainer>
        <HeaderWrap>
          <HeaderLogo to="/">
            <HeaderLogoImg src={logo} alt="" />
          </HeaderLogo>
          <HeaderMenu>
            <HeaderItem>
              <HeaderLink to="/search/javascript">Search</HeaderLink>
            </HeaderItem>
            <HeaderItem>
              <HeaderLink to="/#how-it-works">How it works</HeaderLink>
            </HeaderItem>
            <HeaderItem>
              <HeaderLink to="/#about">About</HeaderLink>
            </HeaderItem>
          </HeaderMenu>
        </HeaderWrap>
      </HeaderContainer>
    </header>
  );
}

export default Header;
