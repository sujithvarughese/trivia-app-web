import {Box, Text} from "@mantine/core";
import {useAppSelector} from "../hooks.ts";


const Score = () => {

  const score = useAppSelector(state => state.game.score)
  const highScore = useAppSelector(state => state.game.highScore)

  return (
    <Box>
      <Text style={{ color: "#fff" }}>Score: {score}</Text>
      <Text style={{ color: "#fff" }}>High Score: {highScore}</Text>
    </Box>
  );
};

export default Score;