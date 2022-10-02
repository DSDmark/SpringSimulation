import React, { useState, FC } from "react";
import { Container, Flex, Box, } from "theme-ui";
import { HeaderData } from "../../Data";
import { Logo } from "./Logo";
import { Navagetion } from "./Navagetion";


const Header: FC = () => {
	const [state, setState] = useState<Iheader>(HeaderData);
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
