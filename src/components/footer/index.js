import React from 'react'
import { Container, Row, Column, Link, Title, Text, Break, Icon } from './styles/Footer'

export default function Footer({ children, ...restProps }) {

    return <Container {...restProps}>{children}</Container>
}

Footer.Row = function FooterRow({ children, ...restProps }) {
    return <Row {...restProps}>{children}</Row>
}

Footer.Column = function FooterColunm({ children, ...restProps }) {
    return <Column {...restProps}>{children}</Column>
}

Footer.Link = function FooterLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>
}

Footer.Title = function FooterTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Footer.Text = function FooterText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}

Footer.Break = function FooterBreak({ ...restProps }) {
    return <Break {...restProps} />
}
Footer.Icon = function FooterIcon({ children, ...restProps }) {
    return <Icon {...restProps}>{children}</Icon>
}

