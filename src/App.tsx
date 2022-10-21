import React from "react";
import { Container, Heading } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <>
      <Heading
        fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
        fontWeight="bold"
        textAlign="center"
        bgGradient="linear(to-l, #7928CA, #FF0080"
        bgClip="text"
        mt={4}
      >
        Scrum board
      </Heading>
      <Container maxWidth="container.lg" px={4} py={10}>
        {/* Column goes here */}
      </Container>
    </>
  );
}

export default App;
