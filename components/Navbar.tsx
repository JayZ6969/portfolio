'use client'

import React, { FC } from 'react';
import Image from 'next/image';
import Message from './Message';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import linkedin from '../public/assets/icons/linkedin.svg';
import github from '../public/assets/icons/github.svg';
import google from '../public/assets/icons/google.svg';
import instagram from '../public/assets/icons/instagram.svg';
import codechef from '../public/assets/icons/codechef.svg';
import leetcode from '../public/assets/icons/leetcode.svg';
import hamburgermenu from '../public/assets/icons/hamburgermenu.svg';

const classes = {
  navbarContainer: 'flex items-center justify-between w-screen min-[1921px]:px-[2.082vw] min-[1921px]:pt-[2.082vw] md:px-10 md:pt-10 sm:px-8 sm:pt-8 px-6 pt-6',
  navbarHeader: 'min-[1921px]:text-[1.562vw]/[1.874vw] min-[1440px]:text-3xl md:text-2xl text-xl font-pp-mori-regular text-white',
  navbarLinks: 'md:flex hidden items-center justify-between min-[1921px]:gap-[2.082vw] min-[1440px]:gap-10 gap-8',
  NavLink: 'relative group',
  NavLinkHover: 'hover:text-white',
  NavLinkUnderline: 'absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100',
  navbarIcons: 'min-[1921px]:w-[2.499vw] min-[1440px]:w-12 xl:w-11 lg:w-10 md:w-9 hover:-translate-y-1.5 transition-transform duration-300 ease-in-out',
  navbarMenuContainer: 'md:hidden block',
  hamBtn: 'block md:hidden w-6',
  hamMenuItems: 'text-decoration-none',
  hamMenuItemsImage: 'w-9',
};

interface MenuOption {
  name: string;
  link: string;
  icon: string;
}

interface NavbarProps {
  title: string;
}

const Navbar: FC<NavbarProps> = ({ title }) => {
  const [openMenu, setOpenMenu] = React.useState<boolean>(false);
  const menuOptions: MenuOption[] = [
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/jayasheelvinayj/',
      icon: linkedin,
    },
    {
      name: 'GitHub',
      link: 'https://github.com/JayZ6969/',
      icon: github,
    },
    {
      name: 'Google',
      link: 'https://developers.google.com/profile/u/JayZ6969',
      icon: google,
    },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/jayasheel.vinay/',
      icon: instagram,
    },
    {
      name: 'CodeChef',
      link: 'https://www.codechef.com/users/jayasheelvinayj',
      icon: codechef,
    },
    {
      name: 'LeetCode',
      link: 'https://leetcode.com/JayZ6969/',
      icon: leetcode,
    },
  ];

  return (
    <div className={classes.navbarContainer}>
      <h1 className={classes.navbarHeader}>{title}</h1>
      <div className={classes.navbarLinks}>
        <a className={`${classes.navbarHeader} ${classes.NavLink} ${classes.NavLinkHover}`} href='/' rel="noreferrer">Home<span className={classes.NavLinkUnderline}></span></a>
        <a className={`${classes.navbarHeader} ${classes.NavLink} ${classes.NavLinkHover}`} href='/#about' rel="noreferrer">About<span className={classes.NavLinkUnderline}></span></a>
        <a className={`${classes.navbarHeader} ${classes.NavLink} ${classes.NavLinkHover}`} href='/#featured' rel="noreferrer">Featured<span className={classes.NavLinkUnderline}></span></a>
        <Message><p className={`${classes.navbarHeader} ${classes.NavLink} ${classes.NavLinkHover}`}>Contact<span className={classes.NavLinkUnderline}></span></p></Message>
      </div>
      <div className={classes.navbarMenuContainer}>
        <Image src={hamburgermenu} className={classes.hamBtn} alt="Menu" onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        anchor='right'
      >
        <Box
          sx={{ width: "250px", backgroundColor: "#7C7C83", height: "100%" }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((option: MenuOption) => (
              <ListItem key={option.name}>
                <a className={classes.hamMenuItems} href={option.link} target="_blank" rel="noreferrer">
                  <ListItemButton>
                    <ListItemIcon>
                      <Image className={classes.hamMenuItemsImage} src={option.icon} alt="" />
                    </ListItemIcon>
                    <ListItemText primary={option.name}
                      sx={{
                        color: 'white',
                        fontSize: '20px'
                      }} />
                  </ListItemButton>
                </a>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </div>
  );
}

export default Navbar;