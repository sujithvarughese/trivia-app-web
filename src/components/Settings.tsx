import {Box, Modal, NativeSelect} from "@mantine/core";
import {useAppDispatch, useAppSelector} from "../hooks.ts";
import {fetchQuestions, setCategory, setNewGame, setShowSettings} from "../features/gameSlice";
import {useDisclosure} from "@mantine/hooks";
import {useState} from "react";
import {categories} from "../utilities/categories.ts";

type ComboboxDataItem = {
  value: string;
  label: string;
};

const formattedCategories: ComboboxDataItem[] = categories.map((item) => ({
  value: item.value.toString(),
  label: item.label,
}));

const Settings = () => {

  const category = useAppSelector(state => state.game.category)
  const showSettings = useAppSelector(state => state.game.showSettings)
  const dispatch = useAppDispatch()

  const saveSettings = () => {
    dispatch(fetchQuestions(category))
    dispatch(setNewGame())
  }

  const [opened, { open, close }] = useDisclosure(false);
  const [value, setValue] = useState("");

  return (
    <Modal opened={opened} onClose={close} title="Settings">

      <NativeSelect
        value={value}
        onChange={(e) => setValue(e.target.value)}
        data={formattedCategories}
      />
      <Box>

      </Box>
    </Modal>
  );
};

export default Settings;