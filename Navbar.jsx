import React from 'react';
import './Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import gmailIcon from './gmail.png';
import SearchIcon from '@mui/icons-material/Search';
import filter from './filter (1).png';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import profile from './profilepic (1).jpg';

export default function Navbar() {
  return (
    <div>
      <nav>
          <div className="navOne">
              <MenuIcon className='menu' style={{fontSize: 24, marginTop: 10, marginBottom: 10, marginLeft: 15, marginRight: 8, color: '#666666', paddingLeft: 10, paddingRight: 10, paddingTop: 10, paddingBottom: 10}} />
              <img src={gmailIcon} alt="" />
              <span>Gmail</span>
          </div>
          <div className="navTwo">
              <div className="navTwo1">
              <SearchIcon style={{color: '#666666'}} />
              <input type="text" placeholder='Search mail' />
              <img src={filter} alt="" />
              </div>
          </div>
          <div className="navThree">
              <HelpOutlineIcon className='icon' style={{marginRight: 1, paddingLeft: 10, paddingRight: 10, paddingTop: 10, paddingBottom: 10, color: '#666666'}} />
              <SettingsIcon className='icon' style={{marginRight: 1, paddingLeft: 10, paddingRight: 10, paddingTop: 10, paddingBottom: 10, color: '#666666'}} />
              <AppsIcon className='icon' style={{marginRight: 1, paddingLeft: 10, paddingRight: 10, paddingTop: 10, paddingBottom: 10, color: '#666666'}} />
              <img src={profile} alt="" />
          </div>
      </nav>
    </div>
  )
}
