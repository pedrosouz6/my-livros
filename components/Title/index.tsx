import { H1 } from './style';

interface TitleProps {
    text: string
}

export function Title({ text }: TitleProps) {
    return (
        <H1>{text}</H1>
    )
}