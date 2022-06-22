import { RiErrorWarningFill } from 'react-icons/ri'
import { ContainerIndicate } from './style'
import { IoMdArrowDropup } from 'react-icons/io'

export function IndicateError() {
    return (
        <ContainerIndicate>
            <i><RiErrorWarningFill /></i>

            <span>
                O e-mail está incorreto 
                <i><IoMdArrowDropup /></i>
            </span>
        </ContainerIndicate>
    )
}