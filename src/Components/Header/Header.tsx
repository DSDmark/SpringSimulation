/** @jsxImportSource theme-ui */
import { Flex, NavLink, Link, Box } from "theme-ui";

const Header = () => {
  return (
    <>
      <Flex as="nav" bg="header">
        <Link
          href="#!"
          p={3}
          m={2}
          sx={{ variant: "links.text", flex: "1 1 auto" }}
        >
          Logo
        </Link>

        <Box
          sx={{
            border: `5px solid red`,
          }}
        >
          <NavLink
            href="#!"
            p={3}
            m={2}
            sx={{ borderRadius: "50px" }}
            bg="alert"
          >
            profdf
          </NavLink>
          <NavLink p={3} m={2}>
            profdf
          </NavLink>
          <NavLink p={3} m={2}>
            profdf
          </NavLink>
        </Box>
      </Flex>
    </>
  );
};

export default Header;
