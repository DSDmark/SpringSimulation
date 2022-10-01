import { Box, Avatar, Text } from "theme-ui";
import React, { FC } from "react"

export const Logo = ({ logo }: any) => (
	<Box p={1} sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
		<Avatar ml={2} src={logo.url} />
		<Text >
			{logo.title}
		</Text>
	</Box>
)