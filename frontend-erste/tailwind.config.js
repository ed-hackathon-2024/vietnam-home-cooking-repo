const { nextui } = require('@nextui-org/theme');
const { ersteTheme } = require('./theme');

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light Mode Colors
        primary: ersteTheme.colors.erste.blue,
        secondary: ersteTheme.colors.erste.berry,
        success: ersteTheme.colors.success.DEFAULT,
        warning: ersteTheme.colors.warning.DEFAULT,
        danger: ersteTheme.colors.danger.DEFAULT,
        neutral: ersteTheme.colors.neutral.DEFAULT,
        'neutral-hover': ersteTheme.colors.neutral.hover,
        'neutral-secondary': ersteTheme.colors.neutral.secondary,
        'neutral-secondary-hover': ersteTheme.colors.neutral['secondary-hover'],
        'neutral-tertiary': ersteTheme.colors.neutral.tertiary,
        'neutral-tertiary-hover': ersteTheme.colors.neutral['tertiary-hover'],
        'text-default': ersteTheme.colors.text.DEFAULT,
        'text-secondary': ersteTheme.colors.text.secondary,
        'text-tertiary': ersteTheme.colors.text.tertiary,
        'text-disabled': ersteTheme.colors.text.disabled,
        'text-on-disabled': ersteTheme.colors.text['on-disabled'],
        'background-light': ersteTheme.colors.base.light,

        // Dark Mode Colors
        'dark-primary': ersteTheme.colors.erste.blue,
        'dark-secondary': ersteTheme.colors.erste.berry,
        'dark-success': ersteTheme.colors.success.secondary,
        'dark-warning': ersteTheme.colors.warning.secondary,
        'dark-danger': ersteTheme.colors.danger.secondary,
        'dark-neutral': ersteTheme.colors.neutral.DEFAULT,
        'dark-neutral-hover': ersteTheme.colors.neutral['secondary-hover'],
        'dark-text-default': ersteTheme.colors.base.light,
        'dark-text-secondary': ersteTheme.colors.neutral.secondary,
        'dark-text-tertiary': ersteTheme.colors.neutral.tertiary,
        'dark-background': ersteTheme.colors.base.dark,
        'dark-foreground': ersteTheme.colors.base.light,
      },
      borderRadius: {
        ...ersteTheme.radius,
      },
      spacing: {
        ...ersteTheme.spacing,
      },
      fontFamily: {
        sans: ersteTheme.fonts.sans,
        mono: ersteTheme.fonts.mono,
      },
      fontSize: {
        hero: ersteTheme.fontSizes.hero,
        page: ersteTheme.fontSizes.page,
        subtitle: ersteTheme.fontSizes.subtitle,
        heading: ersteTheme.fontSizes.heading,
        subheading: ersteTheme.fontSizes.subheading,
        body: ersteTheme.fontSizes.bodyBase,
        'body-small': ersteTheme.fontSizes.bodySmall,
        input: ersteTheme.fontSizes.input,
        code: ersteTheme.fontSizes.code,
      },
      fontWeight: {
        ...ersteTheme.fontWeights,
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: ersteTheme.colors.erste.blue,
            secondary: ersteTheme.colors.erste.berry,
            success: ersteTheme.colors.success.DEFAULT,
            warning: ersteTheme.colors.warning.DEFAULT,
            danger: ersteTheme.colors.danger.DEFAULT,
            neutral: ersteTheme.colors.neutral.DEFAULT,
            background: ersteTheme.colors.base.light,
            foreground: ersteTheme.colors.base.dark,
            text: ersteTheme.colors.text.DEFAULT,
            textSecondary: ersteTheme.colors.text.secondary,
            textTertiary: ersteTheme.colors.text.tertiary,
            textDisabled: ersteTheme.colors.text.disabled,
            textOnDisabled: ersteTheme.colors.text['on-disabled'],
          },
          borderRadius: ersteTheme.radius,
          spacing: ersteTheme.spacing,
          fontFamily: ersteTheme.fonts,
          fontSizes: ersteTheme.fontSizes,
        },
        dark: {
          colors: {
            primary: ersteTheme.colors.erste.blue,
            secondary: ersteTheme.colors.erste.berry,
            success: ersteTheme.colors.success.secondary,
            warning: ersteTheme.colors.warning.secondary,
            danger: ersteTheme.colors.danger.secondary,
            neutral: ersteTheme.colors.neutral.DEFAULT,
            background: ersteTheme.colors.base.dark,
            foreground: ersteTheme.colors.base.light,
            text: ersteTheme.colors.base.light,
            textSecondary: ersteTheme.colors.neutral.secondary,
            textTertiary: ersteTheme.colors.neutral.tertiary,
            textDisabled: ersteTheme.colors.text.disabled,
            textOnDisabled: ersteTheme.colors.text['on-disabled'],
          },
          borderRadius: ersteTheme.radius,
          spacing: ersteTheme.spacing,
          fontFamily: ersteTheme.fonts,
          fontSizes: ersteTheme.fontSizes,
        },
      },
    }),
  ],
};
