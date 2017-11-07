import { Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('window');

export const colors = {
  "secondary": '#0686E4',
  "tertiary": '#fcf7e6',
  "background_dark": '#F0F0F0',
  "text_light": '#ffffff',
  "text_medium": '#464646',
  "text_dark": '#263238',
  "border_color": '#5E565A',
  "transparent_white": '#FFFFFF00',
  "separator_background": '#E2E2E2',
};
export const COLOR_PRIMARY  = '#fff';
export const FONT_MAIN      = 'ALGERIA';
export const FONT_DIN       = 'DINPro-Bold';
export const FONT_BOLD_SIZE = 32;
export const FONTSIZE_L     = 24;
export const FONTSIZE_M     = 18;
export const FONTSIZE_S     = 14;
export const smallSize = {width: 20, height: 20, padding: 5}
export const menuSize = {width: 25, height: 25, resizeMode: 'contain'}
export const iconSize = {width: 40, height: 40, resizeMode: 'contain'}
export const imageSize = {width: 100, height: 100, resizeMode: 'contain'}
export const mediumButtonSize = {width: 75, height: 40, resizeMode: 'contain'}
export const buttonSize = {width: 154, height: 40, resizeMode: 'contain'}

export const smallPhone  = () => {
  if(height<=800)
    return true
  else
    return false
}