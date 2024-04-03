import type { Meta, StoryObj } from '@storybook/react';

import Player from "./Player";
import { Class } from "../../components/Character/Character.types";

const meta = {
  title: "Components/Player",
  component: Player,
} satisfies Meta<typeof Player>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { playerClass: Class.Fighter } };
