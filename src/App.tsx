import Settings from "./components/Settings.tsx";
import {ActionIcon, BackgroundImage, Box, Flex} from "@mantine/core";
import Strikes from "./components/Strikes.tsx";
import Score from "./components/Score.tsx";
import { IoSettingsSharp } from "react-icons/io5";
import {useAppDispatch, useAppSelector} from "./hooks.ts";
import {setShowSettings} from "./features/gameSlice";
import bg from "./assets/images/bg.jpeg";
import Question from "./components/Question.tsx";

const App = () => {

  const dispatch = useAppDispatch()
  const showSettings = useAppSelector(state => state.game.showSettings)
  const showGameOver = useAppSelector(state => state.game.showGameOver)
  const aiResponse = useAppSelector(state => state.game.aiResponse)

  return (
    <Box>
      <BackgroundImage src={bg} style={{ height: "100vh" }}>
        <Flex style={{ width: "100%", justifyContent: "space-between", padding: "10px" }}>
          <Strikes />
          <Score />
          <ActionIcon variant="default" aria-label="Settings" onClick={() => dispatch(setShowSettings(true))}>
            <IoSettingsSharp />
          </ActionIcon>
        </Flex>

        <Settings />

        <Question />

      </BackgroundImage>

    </Box>
  )
}

export default App
