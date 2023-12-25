import React from "react";
import classNames from "classnames";
import { ThemeProp } from "../types/CommonProps";
import "./TimeBar.scss";

export interface TimeBarProps extends React.ComponentProps<"div">, ThemeProp {
	progress: number;
    active: boolean;
    id: string;
}

export function TimeBar ({progress, id, active, theme,...props }: TimeBarProps) {
    return (
        <div className={classNames('timebar')} data-theme={theme} data-timebar-active={active} id={id} key={id} {...props}></div>
    );
};
  
export default TimeBar;