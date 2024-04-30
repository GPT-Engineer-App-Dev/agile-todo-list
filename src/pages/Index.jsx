import { Box, Heading, Input, Button, Text, Flex, Stack } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={4}>
      <Heading mb={4}>Todo App</Heading>
      <Flex mb={4}>
        <Input placeholder="Add a new todo" size="md" mr={2} />
        <Button colorScheme="blue" leftIcon={<FaPlus />}>
          Add
        </Button>
      </Flex>
      <Stack spacing={2}>
        <Text>Todo 1</Text>
        <Text>Todo 2</Text>
        <Text>Todo 3</Text>
      </Stack>
    </Box>
  );
};

export default Index;