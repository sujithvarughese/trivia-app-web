import {Flex, Text} from "@mantine/core";
import {useAppSelector} from "../hooks.ts";
import { IoClose } from "react-icons/io5";


const Strikes = () => {

  const strikes = useAppSelector(state => state.game.strikes)


  return (
    <Flex style={{ justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: "#fff" }}>Strikes: </Text>
        {strikes >= 1 && <IoClose name="close" size={24} color="red" />}
        {strikes >= 2 && <IoClose name="close" size={24} color="red" />}
        {strikes >= 3 && <IoClose name="close" size={24} color="red" />}
    </Flex>
  );
};

export default Strikes;