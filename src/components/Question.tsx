import {useAppDispatch, useAppSelector} from "../hooks.ts";
import {fetchAiResponse, fetchQuestions, setNextQuestion} from "../features/gameSlice";
import {ActionIcon, Box, Loader, Text} from "@mantine/core";
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
    <Box>

      {!!questions.length &&
      <Box>
        <Text style={{ color: "#fff" }}>{questions[questionIndex]?.category} - {questions[questionIndex]?.difficulty}</Text>
        <Text style={{ color: "#fff" }}>{questions[questionIndex]?.question}</Text>
      </Box>
      }

      <Box>
        {questions[questionIndex]?.choices.map((choice: any, index: number) =>
          <ResponseButton
            key={index}
            label={choice.response}
            difficulty={questions[questionIndex]?.difficulty}
            correct={choice.correct}
          />
        )}
      </Box>

      {completed &&
      <Box>
        <ActionIcon onClick={handleAiResponse}>
          {loading ? <Loader /> : <GiBrain size={42} color="#fff" />}
        </ActionIcon>
        <ActionIcon onClick={handleNextQuestion}>
          <FaChevronRight size={42} color="#fff" />
        </ActionIcon>
      </Box>
      }

    </Box>
  );
};

export default Question;