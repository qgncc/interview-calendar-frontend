import { ButtonStyled, ControlsStyled, ControlsCurrentStyled } from "../styled";
import { MouseEvent } from "react";

interface ControlsProps {
	next: (event: MouseEvent<HTMLButtonElement>) => void;
	prev: (event: MouseEvent<HTMLButtonElement>) => void;
	curr: string;
	//TODO classNAme
}

export function Controls(props: ControlsProps) {
	return (
		<ControlsStyled className="controls">
			<ButtonStyled
				onClick={props.prev}
				fontSize="2.5rem"
				width="14.285%"
			>
				&lt;
			</ButtonStyled>
			<ControlsCurrentStyled>{props.curr}</ControlsCurrentStyled>
			<ButtonStyled
				onClick={props.next}
				fontSize="2.5rem"
				width="14.285%"
			>
				&gt;
			</ButtonStyled>
		</ControlsStyled>
	);
}
