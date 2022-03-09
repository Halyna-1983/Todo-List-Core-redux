import styled from "styled-components";

export const Input = styled.input`
width: 300px;
height: 30px;

padding-left: 10px;

/* background-color: red; */
border: 1px solid #e1e1e1;
border-radius: 10px;

&:focus-visible {
    border: 1px solid #ed7f2e;
    outline: none;
}
`