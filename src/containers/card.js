import React, { useState, useEffect, useRef } from 'react'
import { Card, Button } from '../components'
import Data from '../fixtures/questions'


// const getLocalStorage = () => {
//     let score = localStorage.getItem('score');
//     if (score) {
//         return JSON.parse(localStorage.getItem("score"));
//     } else {
//         return 0;
//     }
// };

export function CardContainer() {
    const [index, setindex] = useState(0)
    const [question, setquestion] = useState(null)
    const [options, setoptions] = useState([])
    // const [userAnswer, setUserAnswer] = useState(null)
    const [isCorrect, setisCorrect] = useState(null)
    const [isEnd, setisEnd] = useState(false)
    const [score, setscore] = useState(0)
    const AnswerContainer = useRef(null)
    const ShowAnswer = useRef(() => console.log('hello'));


    const loadQuiz = () => {
        setquestion(Data[index].question)
        setoptions(Data[index].options)

    }

    const chackAnswer = (userAnswer) => {

        const correctAnswer = Data[index].answer
        const answer = Data[index].options[userAnswer]

        if (answer === correctAnswer) {
            setisCorrect(true)
            // AnsewerContainer.current.style.border = '1px solid green';
        }
        else {
            // AnsewerContainer.current.style.border = '1px solid red';
            setisCorrect(false)
        }
    }
    const nexQuestion = () => {
        setindex(index + 1)
        if (isCorrect) {
            setscore(score + 1)
        }
        else { setscore(score) }


        if (index >= Data.length - 1) {
            setindex(Data.length - 1)
            setisEnd(true)
        }

    }


    useEffect(() => {
        loadQuiz();
        // localStorage.setItem("score", JSON.stringify(score));
    }, [index])

    return (
        <Card>
            {
                isEnd ? (
                    <Card>
                        <Card.Frame>
                            <Card.Content>
                                <Card.Header>
                                    <Card.Score> Score {score}</Card.Score>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Question>Run Out of Questions</Card.Question>
                                </Card.Body>
                                <Card.Footer>
                                    <Button bgcolor='transparent' btnWidth='20rem' onClick={() => setindex(0)}>Play Again</Button>
                                </Card.Footer>
                            </Card.Content>
                        </Card.Frame>
                    </Card>
                ) : (
                        <Card.Frame>
                            <Card.Content>
                                <Card.Header>
                                    <Card.Score>Question {index + 1}/{Data.length}</Card.Score>
                                    <Card.Score> Score {score}</Card.Score>
                                </Card.Header>

                                <Card.Body>
                                    <Card.Question>{question}</Card.Question>
                                    {
                                        options.map((answer, index) => {
                                            return (
                                                <ul key={index}>
                                                    <Card.Choice onClick={() => {
                                                        chackAnswer(index);
                                                        nexQuestion();
                                                    }} >
                                                        {answer}
                                                    </Card.Choice>
                                                </ul>
                                            )
                                        })
                                    }
                                </Card.Body>
                                <Card.Footer>
                                    {/* <Button bgcolor='transparent' btnWidth='20rem' onClick={() => }>Next</Button> */}
                                </Card.Footer>
                            </Card.Content>
                        </Card.Frame>
                    )
            }
        </Card>
    )
}
