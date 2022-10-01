import React, { useState, FC } from "react";
import { Container, Avatar, Flex, NavLink, Link, Box, Button, Text } from "theme-ui";
import { HeaderData } from "../../Data";
import { Logo } from "./Logo";
import { Navagetion } from "./Navagetion";

const Header: FC = () => {
	const [state, setState] = useState<any>(HeaderData);
	const { logo, categroy } = state;


	return (
		<>
			<header>
				<Container >
					<Flex sx={{ gap: "2rem" }}>
						<Logo logo={logo} />
						<Box mx="auto" />
						<Navagetion categroy={categroy} />
					</Flex>
				</Container>
			</header>
		</>
	);
};

export default Header;
