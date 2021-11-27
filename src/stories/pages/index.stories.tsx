import React from 'react';
import CountPage from '../../pages';
import { ComponentStory } from '@storybook/react';
import { useModel } from 'umi';
const { count, plus, minus } = useModel('useCount');

export default {
  title: 'count',
  component: CountPage,
};

const Template: ComponentStory<typeof CountPage> = (args) => (
  <CountPage {...args} />
);

export const Count = Template.bind({});
Count.args = {
  count: count,
  plus: plus,
  minus: minus,
};
