import './Footer.scss';
import {MouseEvent} from "react";

interface FooterProps{
	picked: string
	remove:()=>void
	today:()=>void
}

export function Footer(props:FooterProps){
	function handleToday(event:MouseEvent<HTMLButtonElement>){
		props.today()
	}
	function handleRemove(event:MouseEvent<HTMLButtonElement>){
		props.remove();
	}
	return(
		<footer className="footer">
			<div className="footer__wrapper">
				<button onClick={handleToday} className="button">Today</button>
				{!!props.picked && <button onClick={handleRemove} className="button">Delete</button>}
			</div>
		</footer>	
	)
}