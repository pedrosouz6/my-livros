import { RiErrorWarningFill } from 'react-icons/ri'
import { ContainerIndicate } from './style'
import { IoMdArrowDropup } from 'react-icons/io'

interface IndicateErrorProps {
    text: string
}

export function IndicateError({ text }: IndicateErrorProps) {
    return (
        <ContainerIndicate>
            <i><RiErrorWarningFill /></i>

            <span>
                { text }
                <i><IoMdArrowDropup /></i>
            </span>
        </ContainerIndicate>
    )
}