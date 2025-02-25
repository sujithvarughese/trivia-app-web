import {useAppDispatch, useAppSelector} from "../hooks.ts";
import {Button} from "@mantine/core";
import { setScore } from '../features/gameSlice'

type Props = {
  label: string,
  difficulty: string,
  correct: boolean,
}

const ResponseButton = ({ label, difficulty, correct }: Props) => {

  const dispatch = useAppDispatch()
  const completed = useAppSelector(state => state.game.completed)


  return (
    <Button
      onClick={() => dispatch(setScore({ difficulty, correct }))}
      disabled={completed}
      w={{ base: "100%", md: "80%"}}
      m={{ base: 12, md: 24 }}
      style={{
        backgroundColor: completed && correct ? "green" : undefined,
        height: 84,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        borderColor: '#fff',
        borderWidth: 2,
        borderRadius: 18,
        fontSize: 20,
      }}
    >
      {label}
    </Button>
  )


};
export default ResponseButton;