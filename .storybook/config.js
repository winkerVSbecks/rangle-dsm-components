import { configure, addDecorator, addParameters } from '@storybook/react';
import { initDsm } from '@invisionapp/dsm-storybook';
import themeDecorator from './theme-decorator';

addDecorator(themeDecorator);

addParameters({
  backgrounds: [
    { name: 'DSM background', value: '#f8f8fa', default: true },
    { name: 'dark', value: '#333' },
  ],
});

//Init Dsm
initDsm({
  addDecorator,
  addParameters,
  callback: () =>
    configure(require.context('../stories', true, /\.stories\.js$/), module),
});
