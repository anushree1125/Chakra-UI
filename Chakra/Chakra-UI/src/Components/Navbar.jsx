import { UnlockIcon } from "@chakra-ui/icons";
import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
  useToast,
} from "@chakra-ui/react";

export default function Navbar() {
  const toast = useToast();
  const showToast = () => {
    toast({
      title: "Logged out",
      description: "Successfully logged out",
      duration: 5000,
      isClosable: true,
      status: "success",
      position: "top",
      icon: <UnlockIcon></UnlockIcon>,
    });
  };
  return (
    // <Flex bg="gray.200" justify="space-between" wrap="wrap" gap="2">
    //   <Box w="150px" h="50px" bg="red">
    //     1
    //   </Box>
    //   <Box w="150px" h="50px" bg="blue">
    //     2
    //   </Box>
    //   <Box w="150px" flexGrow="1" h="50px" bg="green">
    //     3
    //   </Box>
    //   <Box w="150px" flexGrow="2" h="50px" bg="yellow">
    //     4
    //   </Box>
    // </Flex>
    <Flex as="nav" p="10px" alignItems="center" mb="40px">
      <Heading as="h1">Dojo tasks</Heading>
      <Spacer />
      <HStack spacing="20px">
        <Avatar src="/img/mario.png">
          <AvatarBadge width="1.3em" bg="teal.500">
            <Text fontSize="xs" color="white">
              3
            </Text>
          </AvatarBadge>
        </Avatar>
        {/* <Box bg="gray.200" p="10px">
          M
        </Box>  */}
        <Text>mario@netninja.dev</Text>
        <Button colorScheme="purple" onClick={showToast}>
          Logout
        </Button>
      </HStack>
    </Flex>
  );
}
