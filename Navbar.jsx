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
              <MenuIcon style={{fontSize: 25, marginTop: 10, marginBottom: 10, marginLeft: 30, marginRight: 30}} />
              <img src={gmailIcon} alt="" />
              <span>Gmail</span>
          </div>
          <div className="navTwo">
              <div className="navTwo1">
              <SearchIcon style={{color: '#666666'}} />
              <input type="text" placeholder='Search mail' />
              <img src={filter} alt="" style={{color: '#666666'}} />
              </div>
          </div>
          <div className="navThree">
              <HelpOutlineIcon style={{marginRight: 10}} />
              <SettingsIcon style={{marginRight: 10}} />
              <AppsIcon style={{marginRight: 10}} />
              <img src={profile} alt="" />
          </div>
      </nav>
    </div>
  )
}
