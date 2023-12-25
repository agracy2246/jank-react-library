import React from "react";

import "./Button.scss";
import { ThemeProp } from "../types/CommonProps";

export interface ButtonProps extends React.ComponentProps<"button">, ThemeProp {
	kind?: "primary" | "secondary";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ kind = "primary", theme = 'dark' , ...props }, ref) => {
		return <button data-button={`kind:${kind}`} data-theme={theme} ref={ref} {...props} />;
	},
);
