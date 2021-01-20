import React from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import Button from '../button'



import { Container, Logo, Link, ButtonLink, NavGroup } from './styles/Header'

export default function Header({ children }) {
    return (children)

}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Container  {...restProps} >{children}</Container>
}
Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return <ReactRouterLink to={to}>
        <Logo {...restProps} />
    </ReactRouterLink>
}

Header.Group = function HeaderGroup({ children, ...restProps }) {
    return <NavGroup {...restProps}>{children}</NavGroup>
}
Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>
}

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>
    
}