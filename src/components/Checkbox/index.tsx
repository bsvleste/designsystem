import * as CheckboxPrimiteve from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react'
export interface CheckboxProps {

}
export function Checkbox({ }: CheckboxProps) {
    return (
        <CheckboxPrimiteve.Root className='w-6 h-6 p[2px] bg-gray-800 rounded'>
            <CheckboxPrimiteve.Indicator asChild>
                <Check weight='bold' className='h-6 w-6 text-cyan-500' />
            </CheckboxPrimiteve.Indicator>
        </CheckboxPrimiteve.Root>
    )
}