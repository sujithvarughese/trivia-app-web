import {Box, Button, ButtonGroup, Flex, Modal, NativeSelect} from "@mantine/core";
import {useAppDispatch, useAppSelector} from "../hooks.ts";
import {fetchQuestions, setCategory, setNewGame, setShowSettings} from "../features/gameSlice";
import {categories} from "../utilities/categories.ts";
import {Link} from "react-router";


const Settings = () => {

  const category = useAppSelector(state => state.game.category)
  const showSettings = useAppSelector(state => state.game.showSettings)
  const dispatch = useAppDispatch()

  const saveSettings = () => {
    dispatch(fetchQuestions(category))
    dispatch(setNewGame())
  }

  return (
    <Modal opened={showSettings} onClose={() => setShowSettings(false)} title="Settings">
      <Flex style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16 }}>
        <NativeSelect
          onChange={(e) => dispatch(setCategory(Number(e.target.value)))}
          data={categories}
        />
        <ButtonGroup style={{ gap: 16 }}>
          <Button onClick={saveSettings}>Save</Button>
          <Button onClick={() => dispatch(setShowSettings(false))}>Cancel</Button>
        </ButtonGroup>
        <Link to="/support">Support</Link>
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/contact">Contact</Link>
      </Flex>

    </Modal>
  );
};

export default Settings;