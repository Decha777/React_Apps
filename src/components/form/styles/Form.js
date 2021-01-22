import styled from 'styled-components/macro';

export const Group = styled.form`

    background-color: ${props => props.bgColor};
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    padding: .6rem;
    justify-content:space-between;
    margin: 0 auto;
    width: ${props => props.formWidth};
    

    
    :not(:last-child){
        margin-bottom: 2rem;
    }

    
    
    @media (max-width: 48em) { // Tablet portrait  => 768px/16px = 48em 
        width: 100%;
    }    

`;


export const Lable = styled.label`
        font-size: 1.5rem;
        color: #181818;
        font-weight: 700;
        width: fit-content;
        text-align:center;
        display: block;
        transition: all .3s;    
`;


export const Input = styled.input`
        text-align:center;
        font-size: 1.5rem;
        font-family: inherit;
        color: #353535;
        padding: 1.5rem;
        border-radius: 2px;
        font-family: inherit;
        border: none;
        background-color: #ffffff;
       
        border-bottom: 3px solid transparent;
        width: 80%;
        display: block;

        :focus{
            outline: none;
            box-shadow: 0 .1rem .2rem#000;
           
        }
        :focus:invalid{
            border-bottom: 3px solid red;
        }

        ::-webkit-input-placeholder{
            color: #4b4b4b;           
        }
`;

