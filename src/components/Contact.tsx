import {Box, Container, Text} from "@mantine/core";

const Contact = () => {
  return (
    <Container>
      <Box style={{ textAlign: "center", margin: 16 }}>
        <Text style={{ fontSize: 56, fontWeight: 600, marginBottom: 24 }}>Developer Contact Info</Text>
        <Text>Email: sujithv15@gmail.com</Text>
      </Box>
    </Container>
  );
};

export default Contact;