'use client';

import React, { useState, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AppBar, Toolbar, IconButton, Button, Drawer, Box, Divider, List } from '@mui/material';
import { navbarConfig } from '@/config/navbar-config';
import ErsteLogo from '@/public/erste-logo.svg';
import { ThemeContext } from '@/components/providers';
import { CloseIcon } from '@nextui-org/shared-icons';

const FinanceHelperNavbar = () => {
  const { menuItems } = navbarConfig;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode } = useContext(ThemeContext);

  // Theme-based styles
  const bgColor = isDarkMode ? 'background.default' : 'primary.main';
  const textColor = isDarkMode ? 'text.primary' : 'common.white';

  const toggleDrawer = (open: boolean) => () => {
    setIsMenuOpen(open);
  };

  return (
    <>
      {/* Desktop AppBar */}
      <AppBar position='static' sx={{ bgcolor: bgColor }}>
        <Toolbar>
          {/* Logo */}
          <Box display='flex' alignItems='center' gap={2}>
            <Image src={ErsteLogo} alt='Erste logo' width={120} height={40} />
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', lg: 'flex' } }} ml={4}>
            {menuItems.map(({ label, href }) => (
              <Button
                key={label}
                href={href}
                component={Link}
                sx={{
                  color: textColor,
                  fontWeight: 'bold',
                  textTransform: 'capitalize',
                  '&:hover': { textDecoration: 'underline' },
                }}
              >
                {label}
              </Button>
            ))}
          </Box>

          {/* Hamburger Menu (Mobile) */}
          <IconButton
            edge='end'
            color='inherit'
            aria-label='menu'
            sx={{ display: { lg: 'none' } }}
            onClick={toggleDrawer(true)}
          >
            <List size={32} />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor='right'
        open={isMenuOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{ sx: { bgcolor: bgColor, width: '70%' } }}
      >
        <Box
          role='presentation'
          sx={{ p: 2, height: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          {/* Close Button */}
          <IconButton onClick={toggleDrawer(false)} sx={{ alignSelf: 'flex-end' }}>
            <CloseIcon sx={{ color: textColor }} />
          </IconButton>

          {/* Mobile Menu Links */}
          {menuItems.map(({ label, href }) => (
            <Button
              key={label}
              href={href}
              component={Link}
              sx={{
                color: textColor,
                justifyContent: 'flex-start',
                fontWeight: 'medium',
                textTransform: 'capitalize',
              }}
              onClick={toggleDrawer(false)}
            >
              {label}
            </Button>
          ))}
        </Box>
      </Drawer>
    </>
  );
};

export default FinanceHelperNavbar;
