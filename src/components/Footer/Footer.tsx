import { FooterStyled, ButtonStyled, FooterWrapperStyled } from "../styled";

import { MouseEvent } from "react";

interface FooterProps {
	picked: boolean;
	remove: () => void;
	today: () => void;
}

export function Footer(props: FooterProps) {
	function handleToday(event: MouseEvent<HTMLButtonElement>) {
		props.today();
	}
	function handleRemove(event: MouseEvent<HTMLButtonElement>) {
		props.remove();
	}
	return (
		<FooterStyled>
			<FooterWrapperStyled className="footer__wrapper">
				<ButtonStyled onClick={handleToday}>Today</ButtonStyled>
				{props.picked && (
					<ButtonStyled onClick={handleRemove}>Delete</ButtonStyled>
				)}
			</FooterWrapperStyled>
		</FooterStyled>
	);
}
