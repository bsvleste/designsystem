import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ReactNode } from 'react'

export interface ButtonProps {
    size?: 'sm' | 'md' | 'lg'

    children: ReactNode,
    asChild?: boolean
}

export function Button({ size = 'sm', children, asChild }: ButtonProps) {
    const Comp = asChild ? Slot : 'button'
    return (
        <Comp className={clsx("h-12 bg-cyan-500 rounded font-semibold text-black text-sm transition-colors hover:bg-cyan-200",
            {
                'w-28 ': size === 'sm',
                'w-52 ': size === 'md',
                'w-full ': size === 'lg'
            }
        )}>{children}</Comp>
    )
}