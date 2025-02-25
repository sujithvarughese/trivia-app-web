import {useAppDispatch, useAppSelector} from "../hooks.ts";
import {Button, Flex, Modal, Text} from "@mantine/core";
import {closeAiResponse} from "../features/gameSlice.ts";


const AiResponse = () => {

  const aiResponse = useAppSelector(state => state.game.aiResponse)
  const questions = useAppSelector(state => state.game.questions)
  const questionIndex = useAppSelector(state=> state.game.questionIndex)
  const dispatch = useAppDispatch()

  return (
    <Modal opened={!!aiResponse} onClose={() => dispatch(closeAiResponse())} withCloseButton={false}>
      <Flex style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 16, padding: 16 }}>
        <Text style={{ fontWeight: 600, textAlign: "center" }}>{questions[questionIndex]?.question}</Text>
        <Text>{aiResponse}</Text>
        <Button onClick={() => dispatch(closeAiResponse())}>Close</Button>
      </Flex>
    </Modal>
  );
};

export default AiResponse;