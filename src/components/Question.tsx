import {useAppDispatch, useAppSelector} from "../hooks.ts";
import {fetchAiResponse, fetchQuestions, setNextQuestion} from "../features/gameSlice";
import {ActionIcon, ButtonGroup, Flex, Grid, Loader, Text} from "@mantine/core";
import ResponseButton from "./ResponseButton.tsx";
import { GiBrain } from "react-icons/gi";
import { FaChevronRight } from "react-icons/fa";

const Question = () => {

  const dispatch = useAppDispatch()
  const questions = useAppSelector(state => state.game.questions)
  const questionIndex = useAppSelector(state => state.game.questionIndex)
  const category = useAppSelector(state => state.game.category)
  const completed = useAppSelector(state => state.game.completed)
  const loading = useAppSelector(state => state.game.loading)
  const gameOver = useAppSelector(state => state.game.gameOver)

  const handleNextQuestion = () => {
    if (questionIndex >= questions.length) {
      dispatch(fetchQuestions(category))
    } else {
      dispatch(setNextQuestion())
    }
  }

  const handleAiResponse = () => {
    const correctAnswer = questions[questionIndex].choices.find((choice: { response: string, correct: boolean }) => choice.correct).response
    dispatch(fetchAiResponse(`${questions[questionIndex].question} ${correctAnswer}`))
  }

  return (
    <Flex style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", margin: 48  }}>

      {!!questions.length &&
      <Flex style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16 }}>
        <Text style={{ color: "#fff" }}>{questions[questionIndex]?.category} - {questions[questionIndex]?.difficulty}</Text>
        <Text style={{ color: "#fff", fontWeight: 600 }}>{questions[questionIndex]?.question}</Text>
      </Flex>
      }

      <Grid style={{  width: "100%" }}>
        {questions[questionIndex]?.choices.map((choice: any, index: number) =>
          <Grid.Col span={{ base: 12, md: 6 }} key={index}>
            <ResponseButton
              key={index}
              label={choice.response}
              difficulty={questions[questionIndex]?.difficulty}
              correct={choice.correct}
            />
          </Grid.Col>

        )}
      </Grid>

      {completed &&
      <ButtonGroup style={{ gap: 24 }}>
        <ActionIcon onClick={handleAiResponse} variant="filled" size={64}>
          {loading ? <Loader size={42}/> : <GiBrain  size={42}/>}
        </ActionIcon>
        {!gameOver &&
        <ActionIcon onClick={handleNextQuestion} variant="filled" size={64} p={16}>
          <FaChevronRight size={42}/>
        </ActionIcon>
        }
      </ButtonGroup>
      }

    </Flex>
  );
};

export default Question;