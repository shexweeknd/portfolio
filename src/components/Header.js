import React from 'react';
//images
import Logo from '../assets/logo.svg'

const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      {/*logo*/}
      <a href='#'>
        <img src={Logo} />
      </a>
    </div>
  </header>
};

export default Header;
