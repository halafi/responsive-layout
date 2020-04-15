import baseStyled, { ThemedStyledInterface } from 'styled-components';

export const SIZES = {
  DESKTOP: 1220,
  BIG_TABLET: 1112,
  TABLET: 768,
  BIG_MOBILE: 600,
  MIDDLE_MOBILE: 414,
  SMALL_MOBILE: 360,
};

export const themeDefault = {
  fonts: {
    body: 'Baloo 2, cursive',
    heading: 'inherit',
  },
  breakpoints: [
    `${SIZES.SMALL_MOBILE}px`,
    `${SIZES.MIDDLE_MOBILE}px`,
    `${SIZES.BIG_MOBILE}px`,
    `${SIZES.TABLET}px`,
    `${SIZES.DESKTOP}px`,
  ],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  colors: {
    text: '#ffffff',
    primary: '#000000',
    secondary: '#F0BC30',
    navbar: '#4F592A',
    main: '#FBDFAA',
    footer: '#CCC774',
    rightSidebar: '#F4D272',
    leftSidebar0: '#699240',
    leftSidebar1: '#948B77',
  },
  buttons: {
    primary: {
      color: 'primary',
      background: `linear-gradient(90deg, rgba(238, 183, 45, 1) 0%, rgba(250, 216, 75, 1) 100%)`,
      cursor: 'pointer',
      borderRadius: '25px',
    },
  },
};

export type Theme = typeof themeDefault;

// helper for type errors
export const styled = baseStyled as ThemedStyledInterface<Theme>;
