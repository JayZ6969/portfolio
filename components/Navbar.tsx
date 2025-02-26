'use client'

import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Message from './Message';
import { StaticImageData } from 'next/image';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
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
  icon?: StaticImageData;
}

interface NavbarProps {
  title: string;
}

const Navbar: FC<NavbarProps> = ({ title }) => {
  const [openMenu, setOpenMenu] = React.useState<boolean>(false);

  const menuOptions: MenuOption[] = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '#about' },
    { name: 'Projects', link: '#projects' },
  ];

  return (
    <div className={classes.navbarContainer}>
      <h1 className={classes.navbarHeader}>{title}</h1>
      <div className={classes.navbarLinks}>
        {menuOptions.map((option) => (
          <Link key={option.name} className={`${classes.navbarHeader} ${classes.NavLink} ${classes.NavLinkHover}`} href={option.link} rel="noreferrer">
            {option.name}
            <span className={classes.NavLinkUnderline}></span>
          </Link>
        ))}
        <Message>
          <p className={`${classes.navbarHeader} ${classes.NavLink} ${classes.NavLinkHover}`}>
            Contact
            <span className={classes.NavLinkUnderline}></span>
          </p>
        </Message>
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
            {menuOptions.map((option) => (
              <ListItem key={option.name}>
                <Link className={classes.hamMenuItems} href={option.link} rel="noreferrer">
                  <ListItemButton>
                    <ListItemText primary={option.name}
                      sx={{
                        color: 'white',
                        fontSize: '20px'
                      }} />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </div>
  );
}

export default Navbar;