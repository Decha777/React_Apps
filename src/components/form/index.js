import React from 'react'
import { Group, Input, Lable } from './styles/Form'

export default function FormInput({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>
}

FormInput.Input = function FormInput({ ...restProps }) {
    return <Input {...restProps} />
}

FormInput.Lable = function FormLable({ children, ...restProps }) {
    return <Lable {...restProps}>{children}</Lable>
}
