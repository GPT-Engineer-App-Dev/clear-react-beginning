import { Container, Image, VStack, Text, Box, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Bananas = () => {
  const navigate = useNavigate();

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Box width="100%" display="flex" justifyContent="space-between" alignItems="center">
          <Button onClick={() => navigate("/")}>Home</Button>
        </Box>
        <Text fontSize="2xl">Welcome to the Bananas Page</Text>
        <Image src="/images/monkey.jpg" alt="Monkey" boxSize="300px" objectFit="cover" borderRadius="md" />
        <Text>This is a sleek and modern page featuring a monkey image.</Text>
      </VStack>
    </Container>
  );
};

export default Bananas;