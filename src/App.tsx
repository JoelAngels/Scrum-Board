import React from "react";
import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import { ColumnType } from "./utils/enums";
import "./App.css";
import Column from "./components/Column";

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
        {/* One column on small screen and full column on all screens */}
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 16, md: 4 }}>
          <Column column={ColumnType.TO_DO} />
          <Column column={ColumnType.IN_PROGRESS} />
          <Column column={ColumnType.BLOCKED} />
          <Column column={ColumnType.COMPLETED} />
        </SimpleGrid>
      </Container>
    </>
  );
}

export default App;
