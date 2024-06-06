import { Container, Text, VStack, Button } from "@chakra-ui/react";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const { session, logout } = useSupabaseAuth();
  const navigate = useNavigate();

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to Your New React App</Text>
        <Text>This is a blank canvas. Start building your application here.</Text>
      {session ? (
          <Button onClick={logout}>Logout</Button>
        ) : (
          <Button onClick={() => navigate("/login")}>Login</Button>
        )}
      </VStack>
    </Container>
  );
};

export default Index;