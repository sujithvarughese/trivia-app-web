import {useAppDispatch, useAppSelector} from "../hooks.ts";
import {Button, Modal, Text} from "@mantine/core";
import {closeAiResponse} from "../features/gameSlice.ts";


const AiResponse = () => {

  const aiResponse = useAppSelector(state => state.game.aiResponse)
  const questions = useAppSelector(state => state.game.questions)
  const questionIndex = useAppSelector(state=> state.game.questionIndex)
  const dispatch = useAppDispatch()

  return (
    <Modal opened={!!aiResponse} onClose={() => dispatch(closeAiResponse())}>
      <Text>{questions[questionIndex]?.question}</Text>
      <Text>{aiResponse}</Text>
      <Button onClick={() => dispatch(closeAiResponse())}>Close</Button>
    </Modal>
  );
};

export default AiResponse;