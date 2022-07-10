import { InputHTMLAttributes } from "react";

import { Inputs } from './style';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input(props: InputProps) {
    return (
        <Inputs {...props} />
    )
}