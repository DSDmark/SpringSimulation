/** @jsxImportSource theme-ui */
import { Container, Flex, NavLink, Link, Box, Button, Text } from "theme-ui";

const Header = () => {
	const categroys = [
		"Home2",
		"Home",
		"Abort",
		"Contacts"
	]
	return (
		<>
			<header>
				<Container>
					<Flex sx={{ gap: "2rem" }}>
						<Text variant="title" p={2}>Logo</Text>
						<Box mx="auto" />
						{categroys.map((e, i) => (
							<NavLink key={i + new Date().getTime()} p={2} bg="secodary">{e}</NavLink>
						))}
						<Button bg="black">Login</Button>
					</Flex>
				</Container>
			</header>
		</>
	);
};

export default Header;
