import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Divider,
  Flex,
  HStack,
  Heading,
  SimpleGrid,
  Text,
  filter,
} from "@chakra-ui/react";
import { color } from "framer-motion";
import { useLoaderData } from "react-router-dom";

export default function Dashboard() {
  const tasks = useLoaderData();
  // const boxStyles = {
  //   p: "10px",
  //   bg: "purple.400",
  //   color: "white",
  //   m: "10px",
  //   textAlign: "center",
  //   filter: "blur(2px)",
  //   ":hover": {
  //     color: "black",
  //     bg: "blue.200",
  //     filter: "blur(0px)",
  //   },
  // };
  return (
    // <Container as="section" maxWidth="4xl" py="20px">
    //   <Heading my="30px" p="10px">
    //     Chakra UI Components
    //   </Heading>
    //   <Text marginLeft="30px">
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam at
    //     reprehenderit unde sit aut saepe recusandae quisquam dolorem, ex, fugit
    //     id voluptate consequuntur tempora. Minus labore rerum dignissimos
    //     accusamus in?
    //   </Text>
    //   <Text ml="30px" color="blue.900" fontWeight="bold">
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam at
    //     reprehenderit unde sit aut saepe recusandae quisquam dolorem, ex, fugit
    //     id voluptate consequuntur tempora. Minus labore rerum dignissimos
    //     accusamus in?
    //   </Text>
    //   <Box my="30px" p="20px" bg="orange">
    //     <Text color="white">This is a box</Text>
    //   </Box>
    //   <Box sx={boxStyles}>Hello, Ninjas!</Box>
    // </Container>

    // columns={4}
    // <SimpleGrid p="10px" spacing={10} minChildWidth="250px">
    /*{ <Box bg="white" height="200px" border="1px solid">
        <Text color={{ base: "red", md: "blue", lg: "green" }}>Anushree</Text>
      </Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>

      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>

      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box> }
      </SimpleGrid>
      */
    <SimpleGrid spacing={10} minChildWidth="300px">
      {tasks &&
        tasks.map((task) => (
          <Card
            key={task.id}
            borderTop="8px"
            borderColor="purple.200"
            bg="white"
          >
            <CardHeader>
              <Flex gap={5}>
                <Avatar src={task.img} />
                <Box w="50px" h="50px">
                  <Text>AV</Text>
                </Box>
                <Box>
                  <Heading as="h3" size="small">
                    {task.title}
                  </Heading>
                  <Text>By {task.author}</Text>
                </Box>
              </Flex>
            </CardHeader>
            <CardBody>
              <Text>{task.description}</Text>
            </CardBody>
            <Divider borderColor="gray.200" />
            <CardFooter>
              <HStack>
                <Button variant="ghost" leftIcon={<ViewIcon />}>
                  Watch
                </Button>
                <Button variant="ghost" leftIcon={<EditIcon />}>
                  Comment
                </Button>
              </HStack>
            </CardFooter>
          </Card>
        ))}
    </SimpleGrid>
  );
}

export const taskLoader = async () => {
  const res = await fetch("http://localhost:3000/tasks");
  return res.json();
};
