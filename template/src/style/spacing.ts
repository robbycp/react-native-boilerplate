import {StyleSheet} from 'react-native';
import {Spacing} from './spacingType';

const sizes = [0, 4, 8, 12, 16, 20, 24, 32, 40];

const spacing = StyleSheet.create({
  ...sizes.reduce(
    (acc, value) => ({
      ...acc,
      /* Margins */
      [`m${value}`]: {
        margin: value,
      },
      [`mb${value}`]: {
        marginBottom: value,
      },
      [`mt${value}`]: {
        marginTop: value,
      },
      [`mr${value}`]: {
        marginRight: value,
      },
      [`ml${value}`]: {
        marginLeft: value,
      },
      [`mv${value}`]: {
        marginVertical: value,
      },
      [`mh${value}`]: {
        marginHorizontal: value,
      },
      /* Paddings */
      [`p${value}`]: {
        padding: value,
      },
      [`pb${value}`]: {
        paddingBottom: value,
      },
      [`pt${value}`]: {
        paddingTop: value,
      },
      [`pr${value}`]: {
        paddingRight: value,
      },
      [`pl${value}`]: {
        paddingLeft: value,
      },
      [`pv${value}`]: {
        paddingVertical: value,
      },
      [`ph${value}`]: {
        paddingHorizontal: value,
      },
    }),
    {},
  ),
}) as Spacing;

export default spacing;
