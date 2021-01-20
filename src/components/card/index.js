import React from 'react'

import { Container, Frame, Content, Header, Footer, Body, Choice,Question, Score } from './styles/Card'
export default function Card({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Card.Frame = function CardFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>
}
Card.Content = function CardContent({ children, ...restProps }) {
    return <Content {...restProps}>{children}</Content>
}

Card.Header = function CardHeader({ children, ...restProps }) {
    return <Header {...restProps}>{children}</Header>
}

Card.Footer = function CardFooter({ children, ...restProps }) {
    return <Footer {...restProps}>{children}</Footer>
}
Card.Body = function CardBody({ children, ...restProps }) {
    return <Body {...restProps}>{children}</Body>
}
Card.Choice = function CardChoice({ children, ...restProps }) {
    return <Choice {...restProps}>{children}</Choice>
}
Card.Question = function CardQuestion({ children, ...restProps }) {
    return <Question {...restProps}>{children}</Question>
}
Card.Score = function CardScore({ children, ...restProps }) {
    return <Score {...restProps}>{children}</Score>
}
