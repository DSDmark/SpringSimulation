import { Box, NavLink, Button } from "theme-ui"
import React, { FC } from "react"

interface Icategroy{
	categroy:string[];
}

export const Navagetion:FC<Icategroy>= ({ categroy }) => (
	<Box mr={2}>
		{categroy.map((e: string, i: number) => (
			<NavLink key={i + new Date().getTime()} p={3} bg="secodary">
				{e}
			</NavLink>
		))}
		<Button>Login</Button>
	</Box>
)