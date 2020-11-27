import React, { useRef } from 'react';
function Nav() {
  const navLinks = useRef();
  const hamburger = () => {
    navLinks.current.classList.toggle('nav-open');
    let links = Array.from(navLinks.current.children);
    links.forEach((link) => {
      link.classList.toggle('fade');
    });
  };

  return (
    <nav>
      <div onClick={hamburger} className='hamburger'>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
      </div>
      <ul ref={navLinks} className='nav-links'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>About Me</a>
        </li>
        <li>
          <a href='#'>Projects</a>
        </li>
        <li>
          <a href='#'>Contact me</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
