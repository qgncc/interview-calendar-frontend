import "./Popup.scss";
import {MouseEvent, KeyboardEvent, useState, useEffect, useRef} from "react";


interface PopupProps{
	add:(date: any, hour: any) => void,
	close:()=>void,
}

export function Popup({add, close}: PopupProps){

	let [isError, setIsError] = useState(false);
	let ref = useRef<HTMLInputElement>(null);
	function handleOk(event: MouseEvent<HTMLButtonElement>){
		event.preventDefault();
		let date = ref.current!.value
		let match = date.match(/([0-9]{4}-[0-1][0-9]-[0-3][1-9]) ([0-1][0-9]|[2][0-3])(:[0-5][0-9]:[0-5][0-9])?/);
		if(match){
			console.log(match);
			if(isError) setIsError(false);
			add(match[1].replace('-',""), match[2]);
			close();
		}else{
			setIsError(true);
		}
	}	
	function handleCancel(event: MouseEvent<HTMLButtonElement>){
		event.preventDefault();
		close()
	}
	let style = {transform:`translateY(${window.pageYOffset}px)`};
	
	return(
		<div style={style} className="popup">
			<div className="popup__window">
				<h1 className="popup__title">
					https://calendar.com
				</h1>
				<div className="popup__text">
					Enter event time:<br/>
					YYYY-MM-DD HH:mm:ss
				</div>
				<form action="" className="popup__form">
					<input ref={ref} type="text" className="popup__input"/>
					{isError && <span className="popup__error">wrong date format</span>}

				
					<button onClick={handleCancel} 
							className="button popup__button">
						Cancel
					</button>
					<button onClick={handleOk}
							className="button popup__button">
						Ok
					</button>
				</form>
			</div>
		</div>
	)
}