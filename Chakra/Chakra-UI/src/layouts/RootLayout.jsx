import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { Grid, GridItem, baseTheme } from "@chakra-ui/react";
import Sidebar from "../Components/Sidebar";

export default function RootLayout() {
  return (
    // <div>
    //   <Navbar />
    //   <Outlet />
    // </div>
    // This is not responsive - sidebar gets tiny
    <Grid templateColumns="repeat(6,1fr)" bg="purple.100">
      <GridItem
        as="aside"
        // colSpan="1"
        colSpan={{ base: 6, lg: 2, xl: 1 }}
        bg="brand.400"
        // minHeight="100vh"
        // p="30px"
        minHeight={{ lg: "100vh" }}
        p={{ base: "20px", lg: "30px" }}
      >
        {/* <span>Sidebar</span> */}
        <Sidebar />
      </GridItem>

      <GridItem
        as="main"
        // colSpan="5"
        p="40px"
        colSpan={{ base: 6, lg: 4, xl: 5 }}
      >
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  );
}
