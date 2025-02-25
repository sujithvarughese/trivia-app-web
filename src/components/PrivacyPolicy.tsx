import {Box, Container, Flex, Text} from "@mantine/core";

const PrivacyPolicy = () => {
  return (
    <Container>
      <Box style={{ textAlign: "center", margin: 16 }}>
        <Text style={{ fontSize: 56, fontWeight: 600, marginBottom: 24 }}>Privacy Policy</Text>
        <Text>We do not collect any personal data or information from our users.</Text>
      </Box>
    </Container>

  );
};

export default PrivacyPolicy;