import Settings from "./components/Settings.tsx";
import {ActionIcon, BackgroundImage, Box, Flex} from "@mantine/core";
import Strikes from "./components/Strikes.tsx";
import Score from "./components/Score.tsx";
import { IoSettingsSharp } from "react-icons/io5";
import {useAppDispatch} from "./hooks.ts";
import {setShowSettings} from "./features/gameSlice";
import bg from "./assets/images/bg.jpeg";
import Question from "./components/Question.tsx";
import GameOver from "./components/GameOver.tsx";
import AiResponse from "./components/AiResponse.tsx";

const App = () => {

  const dispatch = useAppDispatch()

  return (
    <Box style={{ maxWidth: "1920px", margin: "0 auto" }}>
      <BackgroundImage src={bg} style={{ height: "100vh" }}>

        <Flex style={{ width: "100%", justifyContent: "space-between", padding: "10px", alignItems: "center" }}>
          <Strikes />
          <Score />
          <ActionIcon
            variant="default"
            aria-label="Settings"
            onClick={() => dispatch(setShowSettings(true))}
            size={36}
          >
            <IoSettingsSharp size={24}/>
          </ActionIcon>
        </Flex>

        <Settings />
        <GameOver />
        <AiResponse />
        <Question />

      </BackgroundImage>

    </Box>
  )
}

export default App
