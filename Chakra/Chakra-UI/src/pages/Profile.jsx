import {
  EmailIcon,
  ChatIcon,
  StarIcon,
  CheckCircleIcon,
  WarningIcon,
} from "@chakra-ui/icons";
import {
  TabList,
  TabPanels,
  Tabs,
  Tab,
  TabPanel,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";

export default function Profile() {
  return (
    <Tabs mt="40px" p="20px" colorScheme="purple" variant="enclosed">
      <TabList>
        <Tab _selected={{ color: "white", bg: "purple.400" }}>Account Info</Tab>
        <Tab _selected={{ color: "white", bg: "purple.400" }}>Task History</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={ChatIcon}></ListIcon>
              Email: anumsbhat15@gmail.com
            </ListItem>
            <ListItem>
              <ListIcon as={ChatIcon}></ListIcon>
              Commodi, quam veniam asperiores enim earum illo iusto ab pariatur
              quod, nulla nesciunt corporis rerum minima alias eaque reiciendis
              et! Et, ab?
            </ListItem>
            <ListItem>
              <ListIcon as={StarIcon}></ListIcon>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </ListItem>
          </List>
        </TabPanel>
        <TabPanel>
          <List>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400"></ListIcon>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
              eligendi.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400"></ListIcon>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
              eligendi.
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.400"></ListIcon>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
              eligendi.
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="teal.400"></ListIcon>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
              eligendi.
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
