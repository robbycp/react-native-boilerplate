import {StyleSheet} from 'react-native';
import {ComponentType} from './componentType';

const sizes = [4, 8, 16, 20];

const component = StyleSheet.create({
  ...sizes.reduce(
    (acc, value) => ({
      ...acc,
      [`circle${value}`]: {
        borderRadius: value / 2,
        height: value,
        width: value,
      },
    }),
    {},
  ),
}) as ComponentType;

export default component;
