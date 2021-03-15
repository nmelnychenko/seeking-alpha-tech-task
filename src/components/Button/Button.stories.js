import React from 'react';

import Button from './index';
import { ReactComponent as ExampleIcon } from "../../assets/icons/print-14.svg";

const defaultView = {
  title: 'Example/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
};

export default defaultView;

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  mods: ["primary"],
  children: "Primary"
};

export const Secondary = Template.bind({});
Secondary.args = {
  mods: ["secondary"],
  children: "Secondary"
};

export const PrimaryLeftIcon = Template.bind({});
PrimaryLeftIcon.args = {
  mods: ["primary"],
  IconLeft: () => <ExampleIcon />,
  children: "Primary with icon"
};

export const SecondaryLeftIcon = Template.bind({});
SecondaryLeftIcon.args = {
  mods: ["secondary"],
  IconLeft: () => <ExampleIcon />,
  children: "Secondary with icon"
};

export const SecondaryLeftIconOnlyDesktop = Template.bind({});
SecondaryLeftIconOnlyDesktop.args = {
  mods: ["secondary", "text-only-desktop"],
  IconLeft: () => <ExampleIcon />,
  children: "Secondary with icon"
};

export const SecondaryLeftIconHiddenText = Template.bind({});
SecondaryLeftIconHiddenText.args = {
  mods: ["secondary", "hidden-body"],
  IconLeft: () => <ExampleIcon />,
  children: "Secondary with icon"
};
