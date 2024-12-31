import React from "react";
import {Button, Spinner} from 'react-bootstrap'



export default function SpinnerButton({onClick, disabled, showAnimation }){

    return (
        <Button disabled={disabled} onClick={onClick}>
            {
            showAnimation ? 
            <><Spinner animation="border" variant="light" size="sm"/>&nbsp;&nbsp;</>
            : <></>
            }
            Создать
        </Button>
    )
}

