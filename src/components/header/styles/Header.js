import styled from 'styled-components/macro'
import { Link as ReactRouterLink } from 'react-router-dom'

export const Container = styled.div`

  display: flex;
  padding: .5rem;
  width: 100%;
  height: fit-content;
  justify-content: space-between;
  align-items: center;
  background-color: #f8f8f8;

`
export const Logo = styled.img`
  height: 6rem;
  width: 6rem;
  margin-right: 4rem;`

export const NavGroup = styled.div`
display:flex;
justify-content:center;
`


export const Link = styled.p`
  text-decoration: none;
  margin-right: 3rem;
  font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
  cursor: pointer;

  &:hover {
   filter:invert(.5)
  }

  &:last-of-type {
    margin-right: 0;
  }`


export const ButtonLink = styled(ReactRouterLink)`
  display: block;
  text-align: center;
  background-color: #f00078;
  width: 8rem;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 1.5rem;
  border-radius: .3rem;
  padding: 1rem;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    filter:invert(1);
  }
  `;
