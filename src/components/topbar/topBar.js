import React from 'react';
import './topBar.css';
import Phone from "@material-ui/icons/Call";
import Email from "@material-ui/icons/MailOutline";

const TopBar = ({email}) => {

  return (
    <div className='topbar'>
        <div className='topbar-Infor'>
            <Phone className='topIcons'/>
            <p className='topBar-parag'>Phone: (+27)72 1287 255</p>
        </div>
 
        <div className='topbar-Infor'>
            <Email className='topIcons'/>
            <p className='topBar-parag'>Email: {email}</p>
        </div>
        
    </div>
  );
};

export default TopBar;
