import {
	PopupStyled, 
	PopupTitleStyled, 
	PopupTextStyled, 
	PopupFormStyled, 
	PopupInputStyled,
	PoupButtonStyled,
	PopupWindowStyled,
	PopupStyledError
} from "../styled";
import {MouseEvent, useState, useRef} from "react";


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
		let match = date.match(
			/(\d{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12][0-9]|3[01])) ([0-1][0-9]|[2][0-3])(:[0-5][0-9]:[0-5][0-9])?/);
		if(match){
			console.log(match)
			if(isError) setIsError(false);
			add(match[1], match[2]);
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
		<PopupStyled style={style}>
			<PopupWindowStyled>
				<PopupTitleStyled>
					https://calendar.com
				</PopupTitleStyled>
				<PopupTextStyled>
					Enter event time:<br/>
					YYYY-MM-DD HH:mm:ss
				</PopupTextStyled>
				<PopupFormStyled>
					<PopupInputStyled ref={ref} type="text"/>
					{isError && <PopupStyledError>wrong date format</PopupStyledError>}

				
					<PoupButtonStyled onClick={handleCancel}> 
						Cancel
					</PoupButtonStyled>
					<PoupButtonStyled onClick={handleOk}>
						Ok
					</PoupButtonStyled>
				</PopupFormStyled>
			</PopupWindowStyled>
		</PopupStyled>
	)
}