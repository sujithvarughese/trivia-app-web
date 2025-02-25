import {Box, Container, Flex, Image, Text} from "@mantine/core";
import screenshot1 from "../assets/images/Simulator Screenshot - iPhone 16 Pro - 2025-02-13 at 20.58.26.png";

const Support = () => {
  return (
    <Container>
      <Flex style={{ justifyContent: "center", alignItems: "center", margin: 16 }}>
        <Box>
          <Text style={{ fontSize: 56, fontWeight: 600, marginBottom: 24 }}>Trivia Night AI</Text>
          <Text style={{ color: "gray", marginBottom: 24 }}>Ultimate Trivia Challenge – Test Your Knowledge & Learn with AI!
            Think you’ve got what it takes to be the ultimate trivia champion? Challenge yourself with Trivia Night AI, the exciting quiz game where you test your knowledge across multiple categories and aim for the highest score!</Text>
          <Text style={{ color: "gray"}}>Developer Email: sujithv15@gmail.com</Text>
        </Box>

        <Box>
          <Image src={screenshot1} alt="screenshot"/>
        </Box>
      </Flex>
    </Container>

  );
};

export default Support;