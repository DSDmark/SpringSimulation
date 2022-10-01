import { Box, NavLink, Button } from "theme-ui"
import React, { FC } from "react"

export const Navagetion: FC = ({ categroy }: any) => (
	<Box mr={2}>
		{categroy.map((e: string, i: number) => (
			<NavLink key={i + new Date().getTime()} p={3} bg="secodary">
				{e}
			</NavLink>
		))}
		<Button>Login</Button>
	</Box>
)