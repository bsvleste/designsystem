import { Meta, StoryObj } from '@storybook/react'
import { Checkbox, CheckboxProps } from ".";
import { Text } from '../Text';

export default {
    title: "Components/Checkbox",
    component: Checkbox,
    decorators: [
        (Story) => {
            return (
                <div className='flex items-center gap-2'>
                    {Story()}
                    <Text size='sm'>Lembrar Senha</Text>
                </div>
            )
        }
    ]
} as Meta<CheckboxProps>
export const Default: StoryObj = {}
