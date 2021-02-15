import React from "react";
import {Label,Input,FormWrapper} from './styledComponents'
export default function Form({ column, headers }: any) {
  return (
    <div>
      {headers.map((item: any) => (
        <FormWrapper>
          <Label>{item}</Label>
          <Input value={column[item]} />
        </FormWrapper>
      ))}
    </div>
  );
}
