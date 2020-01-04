import { configure, addDecorator } from '@storybook/react';
import themeDecorator from './theme-decorator';

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);

addDecorator(themeDecorator);
