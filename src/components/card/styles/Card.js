import styled from 'styled-components/macro';

export const Container = styled.article`
    display:flex;
    justify-content: center;
    align-items:center;
    min-height: 30vh;
    background-image: linear-gradient(-30deg, rgba(199, 0, 123, 0.918) 35%, rgb(0, 15, 32) 20% );
    

`;
export const Frame = styled.div`
    
    display:flex;
    justify-content:center;
    align-items: center;
    max-width: 120rem;
    flex-wrap: wrap;
    z-index: 1; 
`;
export const Content = styled.div`
    perspective: 150rem;
    width: 28rem;
    height: 50%;
    margin:3rem;
    box-shadow: 2rem 2rem 5rem rgba(0,0,0,.5);
    border-radius: 1.5rem;
    background: rgba(255, 255, 255, 0.212);
    overflow:hidden;
    display: flex;
    justify-content: space-between;
    padding: 1.5rem 0;
    align-items: center;
    flex-flow: column nowrap;
    border-top: .1rem solid rgba(255,255,255,.5);
    border-left: .1rem solid rgba(255,255,255,.5);
    backdrop-filter:blur(.5rem);
    
`;
export const Header = styled.div`
border-bottom: 1px solid gray;
width: 100%;
padding: .5rem;
display:flex;
justify-content: space-between;
align-items: center;

    
`;
export const Footer = styled.div`
display:flex;
justify-content: center;
align-items: center;
border-top: 1px solid gray;
width:100% ;
padding:.5rem;
    
`;
export const Choice = styled.div`

  text-align: center;
  color: #c0c0c0;
  height: fit-content;
  padding: .5rem;
  margin: 1.5rem;
  border: ${props => props.isCorrect}; 
  box-shadow: .2rem .2rem .5rem #1d1d1d;
  cursor: pointer;
 :hover{
      box-shadow: .2rem .2rem .5rem #929292;
 }
 ::before{
    box-shadow: .2rem .2rem .5rem #fdfdfd; 
 }
 ::after{
    box-shadow: .2rem .2rem .5rem #fdfdfd; 
 }
`;
export const Question = styled.p`
background-color:#000000;
font-size:1.7rem;
font-weight: 600;
color: #fff;
width: 100%;
padding: .5rem;
`;
export const Score = styled.p`
font-size: 1.5rem;
font-weight: 600;
color: #acacac;
z-index: 1;
`;

export const Body = styled.div`
 text-align: center;
 transition: .5s;
 color: #e4e4e4;
`;
