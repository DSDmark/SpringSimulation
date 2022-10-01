import { Theme } from "theme-ui";

export const theme: Theme = {
	"space": [
		0,
		4,
		8,
		16,
		32,
		64,

	],
	"fonts": {
		"body": "system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", sans-serif",
		"heading": "inherit",
		"monospace": "Menlo, monospace"
	},
	"fontSizes": [
		12,
		14,
		16,
		20,
		24,

	],
	"fontWeights": {
		"body": 400,
		"heading": 700,
		"bold": 700
	},
	"lineHeights": {
		"body": 1.5,
		"heading": 1.125
	},
	"colors": {
		"text": "#000",
		"background": "#fff",
		"primary": "#07c",
		"secondary": "#30c",
		"muted": "#f6f6f6"
	},
	"styles": {
		"root": {
			"fontFamily": "body",
			"lineHeight": "body",
			"fontWeight": "body"
		},
		"h1": {
			"color": "text",
			"fontFamily": "heading",
			"lineHeight": "heading",
			"fontWeight": "heading",
			"fontSize": 5
		},
		"h2": {
			"color": "text",
			"fontFamily": "heading",
			"lineHeight": "heading",
			"fontWeight": "heading",
			"fontSize": 4
		},
		"h3": {
			"color": "text",
			"fontFamily": "heading",
			"lineHeight": "heading",
			"fontWeight": "heading",
			"fontSize": 3
		},

		"p": {
			"color": "text",
			"fontFamily": "body",
			"fontWeight": "body",
			"lineHeight": "body"
		},
		"a": {
			"color": "primary"
		},
		"pre": {
			"fontFamily": "monospace",
			"overflowX": "auto",
			"code": {
				"color": "inherit"
			}
		},

		"img": {
			"maxWidth": "100%"
		}
	},
	"buttons": {
		"primary": {
			"barkground": "colors.primary",
			":focus,:hover": {
				"boxShadow": "elevated",
				"transform": "scale(1.0625)"
			},
		}
	},
	"text": {
		"title": {
			"fontSize": "body",
			"color": "#444C45",
			"fontWidth": "bold"
		},
		"subtitle": {

		},
		"cap": {

		}
	}

}