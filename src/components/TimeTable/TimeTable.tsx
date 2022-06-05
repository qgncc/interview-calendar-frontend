import "./TimeTable.scss"
import {MouseEvent, useState, Dispatch, SetStateAction} from "react";
import {getDayAndHourFromId} from "../../utils";


interface TimeTableProps{
	appointments:number[],
	className?: string,
	picked: string;
	setPicked: Dispatch<SetStateAction<string>>;
}

export function TimeTable({appointments,className, picked, setPicked}: TimeTableProps){
	const table = [];
	className=className===undefined?"":className;
	function hasAppointmentsAt(hourAndDay:string){
		let  [day,hour] = getDayAndHourFromId(hourAndDay);
		let mask = 1<<hour;
		return !!(appointments[day]&mask);

	}

	for(let i = 0; i<24; i++){
		let row = [
			<th key={i-1} scope="row">
				<span className="timeTable__time">
					{('0' + i).slice(-2)+":00"}
				</span>
			</th>
		];
		for(let j = 0; j<7; j++){
			let curr = j+(("0"+i).slice(-2))
			let hasAppointment = hasAppointmentsAt(curr); 
			let className=hasAppointment?"timeTable--appointment":""
			row.push(
				<td className={className}
					id={curr} 
					key={i*10+j}>
					{
						curr === picked && 
							<div className="timeTable--picked"></div>
					}
				</td>
			);
		}
		table.push(<tr key={i}>{row}</tr>)
	}
	function handleClick(event: MouseEvent<HTMLTableElement>){
		let target = event.target as HTMLElement;
		if(target.tagName! !== "TD"){
			return;
		}
		setPicked(target.id!);
	}

	return(
		<table onClick={handleClick} className={"timeTable "+className}>
			<tbody>
				{table}
			</tbody>
		</table>
	)

}