import "./Controls.scss"
import {MouseEvent} from "react";

interface ControlsProps{
	next:(event: MouseEvent<HTMLButtonElement>)=>void,
	prev:(event: MouseEvent<HTMLButtonElement>)=>void,
	curr:string,
	//TODO classNAme
}

export function Controls(props: ControlsProps){
	return(
		<div className="controls">
			<button onClick={props.prev}
					className="button controls__left">
				&lt;
			</button>
			<div className="controls__current">
				{props.curr}
			</div>
			<button className="button controls__right"
					onClick={props.next}>
				&gt;
			</button>
		</div>
	)

}