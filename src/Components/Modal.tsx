import React, { useEffect } from 'react'
import Form from './Form';
import {BackDrop,FormContainer} from './styledComponents'
export default function Modal({column,headers,onWindowClick}:any) {
    useEffect(() => {
        window.addEventListener("click", () => {
            onWindowClick(0);
        });
      },[]);
    return (
        <BackDrop >
            <FormContainer onClick={(e)=>e.stopPropagation()}>
            <Form column={column} headers={headers} />
            </FormContainer>
        </BackDrop>
    )
}
