import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { rest } from 'msw'
import { expect } from '@storybook/jest'
import { Signin } from ".";

export default {
    title: "Pages/Sign in",
    component: Signin,
    args: {
        children: "Create Account",
    },
    argTypes: {},
    parameters: {
        msw: {
            handlers: [
                rest.post('/sessions', (req, res, ctx) => {
                    return res(ctx.json({
                        message: "login realizado"
                    }))
                })
            ]
        }
    }
} as Meta

export const Default: StoryObj = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)
        userEvent.type(canvas.getByPlaceholderText('Digite seu Email'), 'bvaleiro@gmail.com')
        userEvent.type(canvas.getByPlaceholderText('***********'), 'm4r1n42017')

        userEvent.click(canvas.getByRole('button'))

        await waitFor(() => {
            return expect(canvas.getByText('Login Realizado com sucesso')).toBeInTheDocument()
        })
    }
}