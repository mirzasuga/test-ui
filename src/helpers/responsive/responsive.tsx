// import { Platform } from 'react-native';
import {
  widthPercentageToDP as wp2dp,
  heightPercentageToDP as hp2dp,
} from 'react-native-responsive-screen';

/**
 * Width-Percentage
 * Converts width dimension to percentage
 * 360, 640 - design were made using this scale
 * @param dimension directly taken from design wireframes
 * @returns {number} percentage string e.g. '25%'
 */
export const wp = (dimension: number): number => {
  return wp2dp((dimension / 360) * 100 + '%');
};

/**
 * Height-Percentage
 * Converts width dimension to percentage
 * * 360, 640 - design were made using this scale
 * @param dimension directly taken from design wireframes
 * @returns {number} percentage string e.g. '25%'
 */
export const hp = (dimension: number): number => {
  return hp2dp((dimension / 640) * 100 + '%');
};
