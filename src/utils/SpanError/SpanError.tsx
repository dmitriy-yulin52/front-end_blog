import * as React from 'react'
import {memo, ReactElement} from "react";
import {Typography} from "@material-ui/core";


interface SpanErrorProps {
    helperText:string
    error:boolean
}


const margin_style = {
    marginTop:'8px'
}as const

export const SpanError = memo(function SpanError(props:SpanErrorProps):ReactElement{
    const {helperText,error}= props
    return <Typography color={error ? 'error' : 'inherit'}style={margin_style}>{helperText}</Typography>
})