import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from ".";

export default {
    title: "Components/Button",
    component: Button,
    args: {
        children: "Lorem ipsun",
        size: 'sm'
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<ButtonProps>
export const Default: StoryObj = {}
