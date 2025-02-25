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
      style={{
        backgroundColor: completed && correct && "green",
        width: 320,
        height: 84,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        borderColor: '#fff',
        borderWidth: 2,
        borderRadius: 18,
        flexDirection: 'row',
      }}
    >
      {label}
    </Button>
  )


};
export default ResponseButton;