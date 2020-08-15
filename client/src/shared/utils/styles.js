import { css } from 'styled-components';

export const color = {
  primary: '#0052cc', // Blue
  success: '#0B875B', // green
  danger: '#E13C3C', // red
  warning: '#F89C1C', // orange
  secondary: '#F4F5F7', // light grey

  smokewhite: '#F5F5F5',
  purple: '#390099',

  textDarkest: '#172b4d',
  textDark: '#42526E',
  textMedium: '#5E6C84',
  textLight: '#8993a4',
  textVeryLight: '#bababa',
  textVeryLight2: 'rgb(211, 212, 213)',
  textLink: '#0052cc',

  white: '#fff',

  backgroundDarkPrimary: '#0747A6',
  backgroundMedium: '#dfe1e6',
  backgroundLight: '#ebecf0',
  backgroundLightest: '#F4F5F7',
  backgroundLightPrimary: '#D2E5FE',
  backgroundLightSuccess: '#E4FCEF',

  borderLightest: '#dfe1e6',
  borderLight: '#C1C7D0',
  borderInputFocus: '#4c9aff',
};

export const fontSize = {
  small : '0.75em', // 12px
  small2 : '0.875em', //14px
  med : '1.25em', // 20px
  large : '1.4375em',
  xl : '3em',
  xl2 : '3em',
}

export const padding = {
  half : '.5em',
  small : '0.625em', // 10px
  med : '1em',
  med2 : '1.5em',
  double : '2em',
  quarter :'.25em',
}

export const zIndexValues = {
  modal: 1000,
  dropdown: 101,
  navLeft: 100,
};