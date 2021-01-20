import styled from 'styled-components/macro';

export const Container = styled.div`
  background-color: #2c2c2c;
  color: #dddddd;
  display: flex;
  padding: 1rem 7rem;
  flex-direction: column;
  text-align: center;

  
`;
export const Row = styled.div`
  display: flex;
  justify-content:${props=>props.center ?'center' :'space-between'};
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;

`;
export const Title = styled.p`
  font-size: 1.6rem;
  color: #d3d3d3;
  margin: 2rem;
  
`;
export const Link = styled.a`
  color: #c0c0c0;
  margin: 2rem;
  font-size: 1.3rem;
  text-decoration: none;
  text-align: left;
`;
export const Text = styled.p`
 font-size: 1.3rem;
  color: #d4d4d4;
  margin-bottom: 4rem;
  `;
export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
  `;

export const Icon= styled.a`
 margin: 0 1rem;
 font-size: 3rem;
 padding: 1rem;
 color: #f00078;

 :hover{
    filter:invert(1);
 }

`;