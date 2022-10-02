import { Box, Avatar, Text } from "theme-ui";
import React, { FC } from "react"

interface ILogo {
	logo: Ilogo;
}
export const Logo: FC<ILogo> = ({ logo }) => (

	<Box p={1} sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
		<Avatar ml={2} src={logo.url} />
		<Text >
			{logo.title}
		</Text>
	</Box>
)