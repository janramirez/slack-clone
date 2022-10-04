import React from 'react';
import './Header.css';
import { Avatar } from '@mui/material';
import { AccessTimeOutlined, HelpOutline, SearchOutlined } from '@mui/icons-material';

function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        {/* Avatar */}
        < Avatar 
          className='header__avatar' 
          alt='user.?displayName' 
          src=''
        />
        < AccessTimeOutlined />
      </div>
      <div className='header__search'>
        {/* searchbar */}
        < SearchOutlined />
        < input placeHolder="Search..." />
      </div>
      <div className='header__right'>
        {/* icons */}
        <HelpOutline />
      </div>
    </div>
  )
}

export default Header