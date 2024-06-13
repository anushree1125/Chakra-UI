import { List, ListIcon, ListItem } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { EditIcon, CalendarIcon, AtSignIcon } from "@chakra-ui/icons";
export default function Sidebar() {
  return (
    <List color="white" fontSize="1.2rem" spacing={4}>
      <ListItem>
        <ListIcon as={CalendarIcon} />
        <NavLink to="/">Dashboard</NavLink>
      </ListItem>
      <ListItem>
        <ListIcon as={EditIcon} />
        <NavLink to="/create">New Task</NavLink>
      </ListItem>
      <ListItem>
        <ListIcon as={AtSignIcon} />
        <NavLink to="/profile">Profile</NavLink>
      </ListItem>
    </List>
  );
}
