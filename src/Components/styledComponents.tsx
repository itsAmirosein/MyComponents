import styled, { createGlobalStyle } from 'styled-components'
export const GlobalStyles = createGlobalStyle`
body{
    margin:0;
    padding:0;
}
*{
    box-sizing:border-box;
}
`
export const ButtonWrraper  = styled.div`
border:1px solid black;
max-width:200px;
height:100px;
width:200px;
border-radius:7px;

`

export const Wrapper  = styled.div`
width:100vw;
height:100vh;
display:flex;
justify-content:center;
align-items:center;
`

export const BackDrop = styled.div`
position:absolute;
left:0;
top:0;
width:100vw;
height:100vh;
background-color:rgb(63,63,63,0.1);
display:flex;
justify-content:center;
align-items:center;
`
export const Row = styled.tr`
border-bottom:1px solid #7E7E7E;
`
export const Td = styled.td`
padding:10px;
`
export const Th = styled.th`
padding:10px;
`
export const Header = styled.thead`
border-bottom:1px solid #7E7E7E;
`
export const FormContainer = styled.div`
background-color:#787878;
width:50%;
height:50vh;
display:flex;
justify-content:center;
align-items:center;

`
export const Label = styled.div`
width:100px;
margin-right:10px;
display:flex;
justify-content:flex-end
`

export const Input = styled.input`
`
export const FormWrapper = styled.div`
display:flex;
flex-direction:row;

`
