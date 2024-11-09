// theme/customTheme.ts

import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const lightPalette = {
  mode: 'light',
  background: {
    default: '#F7FAFC', // Light gray background
    paper: '#FFFFFF', // White card and input background
  },
  primary: {
    main: '#2563EB', // Blue primary color
    light: '#3B82F6', // Lighter blue for hover effects
    dark: '#1E40AF', // Darker blue
  },
  secondary: {
    main: '#14B8A6', // Teal
    light: '#2DD4BF', // Lighter teal
    dark: '#0D9488', // Darker teal
  },
  text: {
    primary: '#1A202C', // Dark text
    secondary: '#4A5568', // Gray text
  },
  error: {
    main: '#E53E3E', // Red for errors
  },
  success: {
    main: '#22C55E', // Green for success
  },
};

const darkPalette = {
  mode: 'dark',
  background: {
    default: '#0D1117', // Dark background
    paper: '#161B22', // Card and input background
  },
  primary: {
    main: '#2563EB', // Blue primary color
    light: '#3B82F6', // Lighter blue for hover effects
    dark: '#1E40AF', // Darker blue
  },
  secondary: {
    main: '#14B8A6', // Teal
    light: '#2DD4BF', // Lighter teal
    dark: '#0D9488', // Darker teal
  },
  text: {
    primary: '#FFFFFF', // White text
    secondary: '#9CA3AF', // Light gray text
  },
  error: {
    main: '#EF4444', // Red for errors
  },
  success: {
    main: '#22C55E', // Green for success
  },
};

const typography = {
  fontFamily: `'Inter', sans-serif`,
  h1: {
    fontWeight: 700,
    fontSize: '3rem',
  },
  h2: {
    fontWeight: 700,
    fontSize: '2.25rem',
  },
  h5: {
    fontWeight: 600,
  },
  body1: {
    fontWeight: 400,
  },
  body2: {
    fontWeight: 300,
  },
  button: {
    textTransform: 'none', // No uppercase for buttons
    fontWeight: 600,
  },
};

const components = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        padding: '10px 20px',
        fontWeight: 600,
      },
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        padding: '10px',
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 16,
        boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  MuiTypography: {
    styleOverrides: {
      root: {
        color: 'inherit',
      },
    },
  },
};

const lightTheme = createTheme({
  palette: lightPalette,
  typography,
  shape: {
    borderRadius: 16,
  },
  components,
});

const darkTheme = createTheme({
  palette: darkPalette,
  typography,
  shape: {
    borderRadius: 16,
  },
  components,
});

export const responsiveLightTheme = responsiveFontSizes(lightTheme);
export const responsiveDarkTheme = responsiveFontSizes(darkTheme);
