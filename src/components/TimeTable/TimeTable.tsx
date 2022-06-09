import {
	TableStyled,
	TableTrStyled, 
	TableThStyled, 
	TableTimeStyled, 
	TableTdStyled, 
} from "../styled";
import {MouseEvent, Dispatch, SetStateAction} from "react";
import {getDayAndHourFromId, hasAppointmentAt} from "../../utils";


interface TimeTableProps{
	appointments:number[],
	picked: string;
	setPicked: Dispatch<SetStateAction<string>>;
}

export function TimeTable({appointments, picked, setPicked}: TimeTableProps){
	const table = [];

	for(let i = 0; i<24; i++){
		let row = [
			<TableThStyled key={i-1} scope="row">
				<TableTimeStyled>
					{('0' + i).slice(-2)+":00"}
				</TableTimeStyled>
			</TableThStyled>
		];
		for(let j = 0; j<7; j++){
			let curr = j+(("0"+i).slice(-2))
			let hasAppointment = hasAppointmentAt(...getDayAndHourFromId(curr), appointments); 
			row.push(
				<TableTdStyled id={curr} 
							   key={i*10+j}
							   picked={curr===picked}
							   hasAppointment={hasAppointment}
							   >

				</TableTdStyled>
			);
		}
		table.push(<TableTrStyled key={i}>{row}</TableTrStyled>)
	}
	function handleClick(event: MouseEvent<HTMLTableElement>){
		let target = event.target as HTMLElement;
		if(target.tagName! !== "TD"){
			return;
		}
		setPicked(target.id!);
	}

	return(
		<TableStyled onClick={handleClick}>
			<tbody>
				{table}
			</tbody>
		</TableStyled>
	)

}