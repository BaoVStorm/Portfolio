import React from 'react';

export const Header: React.FC = () => {
  return (
    <>
<header id="header">
<div className="header-content" id="logo">
<div className="subnemu">
{/*  VStorm  */}
<div id="logo-header">
<img alt="logo" src="assets/logo/VS_logo.png"/>
{/*  <img src="assets/logo/VS_logo_dark.png" alt="logo" />  */}
</div>
</div>
</div>
<ul className="header-content" id="menu">
{/*  <li className="subnemu highlight-submenu">  */}
<li className="subnemu">
<a className="preventEvent" href="#home">
<span className="long-show-header">home</span>
<span className="short-show-header">hm</span>
</a>
</li>
<li className="subnemu">
<a className="preventEvent" href="#about">
<span className="long-show-header">about</span>
<span className="short-show-header">abt</span>
</a>
</li>
<li className="subnemu">
<a className="preventEvent" href="#skills">
<span className="long-show-header">skills</span>
<span className="short-show-header">sk</span>
</a>
</li>
<li className="subnemu">
<a className="preventEvent" href="#projects">
<span className="long-show-header">projects</span>
<span className="short-show-header">prj</span>
</a>
</li>
<li className="subnemu">
<a className="preventEvent" href="#experience">
<span className="long-show-header">experience</span>
<span className="short-show-header">exp</span>
</a>
</li>
<li className="subnemu">
<a className="preventEvent" href="#contact">
<span className="long-show-header">contact</span>
<span className="short-show-header">cnt</span>
</a>
</li>
</ul>
</header>
    </>
  );
};
