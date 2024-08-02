import React from 'react'
import './Navbar.css'
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import linkedin from '../../assets/icons/linkedin.svg'
import github from '../../assets/icons/github.svg'
import google from '../../assets/icons/google.svg'
import instagram from '../../assets/icons/instagram.svg'
import codechef from '../../assets/icons/codechef.svg'
import leetcode from '../../assets/icons/leetcode.svg'
import hamburgermenu from '../../assets/icons/hamburgermenu.svg'



const Navbar = () => {

  const[openMenu, setOpenMenu] = React.useState(false)
  const menuOptions = [
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/jayasheelvinayj/',
      icon: linkedin
    },
    {
      name: 'GitHub',
      link: 'https://github.com/JayZ6969/',
      icon: github
    },
    {
      name: 'Google',
      link: 'https://developers.google.com/profile/u/JayZ6969',
      icon: google
    },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/jayasheel.vinay/',
      icon: instagram
    },
    {
      name: 'CodeChef',
      link: 'https://www.codechef.com/users/jayasheelvinayj',
      icon: codechef
    },
    {
      name: 'LeetCode',
      link: 'https://leetcode.com/JayZ6969/',
      icon: leetcode
    }
  ]

  return (
      <div className='navbar-container'>
        <h1>My Portfolio</h1>
        <div className='navbar-links'>
          <a href='https://www.linkedin.com/in/jayasheelvinayj/' target="_blank" rel="noreferrer"><img src={linkedin} alt="" /></a>
          <a href='https://github.com/JayZ6969/' target="_blank" rel="noreferrer"><img src={github} alt="" /></a>
          <a href='https://developers.google.com/profile/u/JayZ6969' target="_blank" rel="noreferrer"><img src={google} alt="" /></a>
          <a href='https://www.instagram.com/jayasheel.vinay/' target="_blank" rel="noreferrer"><img src={instagram} alt="" /></a>
        </div>
        <div className="navbar-menu-container">
          <img src={hamburgermenu} className="ham-btn" alt="" onClick={() => setOpenMenu(true)}/>
        </div>
        <Drawer 
          open={openMenu} 
          onClose={() => setOpenMenu(false)}
          anchor='right'
        >
          <Box
            sx={{width: "250px",backgroundColor: "#7C7C83", height: "100%"}}
            role="presentation"
            onClick={() => setOpenMenu(false)}
            onKeyDown={() => setOpenMenu(false)}
          >
            <List>
              {menuOptions.map((option, index) => (
                <ListItem key={option.name}>
                  <a className="ham-menu-items"href={option.link} target="_blank" rel="noreferrer">
                    <ListItemButton>
                      <ListItemIcon>
                        <img src={option.icon} alt="" />
                      </ListItemIcon>
                      <ListItemText primary={option.name} 
                      sx={{
                        color: 'white',
                        fontSize: '20px'
                      }}/>
                    </ListItemButton>
                  </a>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </div>
  )
}

export default Navbar