'use client'

import React, { FC } from 'react';
import Image from 'next/image';
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
  navbarContainer: 'flex items-center justify-between w-full md:p-10 sm:p-8 p-6',
  navbarHeader: 'md:text-2xl text-xl font-pp-mori-regular text-white',
  navbarLinks: 'md:flex hidden items-center justify-between gap-10',
  navbarIcons: 'w-9 hover:-translate-y-1.5 transition-transform duration-300 ease-in-out',
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

const Navbar: FC = () => {
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
      <h1 className={classes.navbarHeader}>My Portfolio</h1>
      <div className={classes.navbarLinks}>
        <a href='https://www.linkedin.com/in/jayasheelvinayj/' target="_blank" rel="noreferrer"><Image className={classes.navbarIcons} src={linkedin} alt="" /></a>
        <a href='https://github.com/JayZ6969/' target="_blank" rel="noreferrer"><Image className={classes.navbarIcons} src={github} alt="" /></a>
        <a href='https://developers.google.com/profile/u/JayZ6969' target="_blank" rel="noreferrer"><Image className={classes.navbarIcons} src={google} alt="" /></a>
        <a href='https://www.instagram.com/jayasheel.vinay/' target="_blank" rel="noreferrer"><Image className={classes.navbarIcons} src={instagram} alt="" /></a>
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
            {menuOptions.map((option: MenuOption, index: number) => (
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