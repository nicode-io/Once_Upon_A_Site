import {ComponentMeta, ComponentStory} from '@storybook/react';
import {DemoLink}                      from './DemoLink';


export default {
	title: 'Dummy/DemoLink',
	component: DemoLink,
} as ComponentMeta<typeof DemoLink>;

const Template: ComponentStory<typeof DemoLink> = (args) => <DemoLink {...args} />;

export const Small = Template.bind({});
Small.args = {
	size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
	size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
	size: 'large',
};
