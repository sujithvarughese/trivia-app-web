import {Flex, Text} from "@mantine/core";
import {useAppSelector} from "../hooks.ts";


const Score = () => {

  const score = useAppSelector(state => state.game.score)
  const highScore = useAppSelector(state => state.game.highScore)

  return (
    <Flex style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: "#fff", fontWeight: 700 }}>Score: {score}</Text>
      <Text style={{ color: "#fff" }}>High Score: {highScore}</Text>
    </Flex>
  );
};

export default Score;