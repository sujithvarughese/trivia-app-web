import {useAppDispatch, useAppSelector} from "../hooks.ts";
import {setNewGame, fetchQuestions, setShowGameOver} from "../features/gameSlice";
import {Button, ButtonGroup, Modal, Text} from "@mantine/core";

const GameOver = () => {

  const dispatch = useAppDispatch()
  const score = useAppSelector(state => state.game.score)
  const highScore = useAppSelector(state => state.game.highScore)
  const showGameOver = useAppSelector(state => state.game.showGameOver)
  const category = useAppSelector(state => state.game.category)

  const handleClickNewGame = () => {
    dispatch(fetchQuestions(category))
    dispatch(setNewGame())
  }


  return (
    <Modal opened={showGameOver} onClose={() => dispatch(setShowGameOver(false))} title="Game Over">
      <Text>Game Over</Text>
      {score === highScore && <Text>NEW HIGH SCORE</Text>}
      <Text>Your Score: {score}</Text>
      <ButtonGroup>
        <Button onClick={handleClickNewGame}>Play Again</Button>
        <Button onClick={() => dispatch(setShowGameOver(false))}>Close</Button>
      </ButtonGroup>
    </Modal>
  );
};

export default GameOver;