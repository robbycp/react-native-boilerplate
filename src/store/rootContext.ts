import * as navigator from '~/navigation/navigator';

export enum ContextName {
  NAVIGATOR = 'navigator',
}

const rootContext = {
  [ContextName.NAVIGATOR]: navigator,
};

export type RootContext = typeof rootContext;

export default rootContext;
